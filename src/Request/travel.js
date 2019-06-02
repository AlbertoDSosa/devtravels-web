import axios from 'axios';

export const getTravels = async () => {
    try {
        const res = await axios.get('http://localhost:8080/travel/all');
        return res.data;

    } catch(error) {
        console.error(error.response);
    }
}

export const getDashboardTravels = async (token) => {
    try {
        const res = await axios.get('http://localhost:8080/travel/dasboard/travels', {
            headers: {
                authorization: token
            }
        });
        return res.data;

    } catch(error) {
        console.error(error.response);
    }
}