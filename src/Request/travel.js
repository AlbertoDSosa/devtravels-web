import axios from 'axios';

export const getTravels = async () => {
    try {
        const res = await axios.get('http://localhost:8080/travel/all');
        return res.data;

    } catch(error) {
        console.error(error.response);
    }
}