// Auth Actions

import { actionTypes } from '../Reducers/auth';
import axios from 'axios';

const singup = (data)=> {
    return {
        type: actionTypes.SINGUP_USER,
        data 
    }   
}

export function singupAsync (body) {
   return (dispatch) => {
        axios
            .post('http://localhost:8080/user/singup', body)
            .then((res) => {
                dispatch(singup(res.data));
            })
            .catch((error) => {
                dispatch(singup(error.response.data));
            });
        
   } 
}

const singin = (data)=> {
    return {
        type: actionTypes.SINGIN_USER,
        data 
    }   
}


export function singinAsync (body) {
    return (dispatch) => {
        axios
            .post('http://localhost:8080/user/singin', body)
            .then((res) => {
                dispatch(singin({
                    ...res.data,
                    token: res.headers.authorization
                }));

            })
            .catch((error)=>{
                dispatch(singin(error.response.data));
            });
       
   } 
}

export const singout = () => {
    return {
        type: actionTypes.SINGOUT_USER 
    }   
}