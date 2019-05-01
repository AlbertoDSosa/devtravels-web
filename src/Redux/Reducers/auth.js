// Auth Reducer

const initialState = {};

export const actionTypes = {
    SINGUP_USER: 'user->SINGUP',
    SINGIN_USER: 'user->SINGIN'
}

export default (prevState = initialState, action) => {
    switch(action.type) {
        case actionTypes.SINGUP_USER:
            return {
                ...prevState,
                ...action.data
            }
            case actionTypes.SINGIN_USER:
            return {
                ...prevState,
                ...action.data
            }
        default:
            return prevState;
    }
}