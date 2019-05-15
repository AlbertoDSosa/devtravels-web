import axios from 'axios';

export const getProfile = async (user_id, token) => {
    
    try {
        const profile = await axios.get('http://localhost:8080/profile/me', {
            headers: {
                authorization: token
            },
            params: {
                user_id
            }
        })
        
        return profile.data;
    } catch(error) {
        console.log(error.response);
    }
}