// Auth Reducer

const initialState = {
    isLogged: false,
    user: null
};

export const actionTypes = {
    SINGIN_USER: 'user->SINGIN',
    SINGOUT_USER: 'user->SINGOUT'
}

export default (prevState = initialState, action) => {

    switch(action.type) {

        case actionTypes.SINGIN_USER:
            return {
                ...prevState,
                user: action.data.user,
                isLogged: true
            }
        case actionTypes.SINGOUT_USER:
            return initialState;
        default:
            return prevState;
    }
}