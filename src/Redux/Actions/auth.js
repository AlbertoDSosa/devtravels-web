// Auth Actions

import { actionTypes } from '../Reducers/auth';
import axios from 'axios';

export const singIn = async (dispatch, body)=> {

    const response = await axios
                            .post(
                                'http://localhost:8080/user/singin',
                                 body
                            )
    dispatch({
        type: actionTypes.SINGIN_USER,
        data: response.data
    });

    return response;
}

export const singout = () => {
    return {
        type: actionTypes.SINGOUT_USER 
    }   
}
