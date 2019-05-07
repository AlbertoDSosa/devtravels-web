import axios from 'axios';

export const singUp = async (body)=> {
    return await axios.post('http://localhost:8080/user/singup', body);
}