// Auth Actions

import { actionTypes } from '../Reducers/auth';
import axios from 'axios';

export const singup = (data)=> {
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
                dispatch(singup(res.data))
            })
            .catch((err)=>{
                console.log(err)
            })
        
   } 
}

export const singin = (data)=> {
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
                dispatch(singin(res.data))

                localStorage
                    .setItem(
                        'authorization',
                        res.headers.authorization
                    );
            })
            .catch((err)=>{
                console.log(err)
            })
        return {
            type: actionTypes.SINGIN_ASYNC_USER
        }
   } 
}