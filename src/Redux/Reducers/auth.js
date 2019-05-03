// Auth Reducer

const initialState = {
    singup: false,
    singin: false
};

export const actionTypes = {
    SINGUP_USER: 'user->SINGUP',
    SINGIN_USER: 'user->SINGIN'
}

export default (prevState = initialState, action) => {
    switch(action.type) {
        case actionTypes.SINGUP_USER:
            if(action.data.err) {
                return {
                    ...prevState,
                    ...action.data
                }
            }
            
            return {
                ...prevState,
                ...action.data,
                singup: true
            }

        case actionTypes.SINGIN_USER:
            if(action.data.err) {
                return {
                    ...prevState,
                    ...action.data
                }
            }

            return {
                ...prevState,
                ...action.data,
                singin: true
            }
        default:
            return prevState;
    }
}