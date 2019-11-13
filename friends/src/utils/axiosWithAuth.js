import axios from 'axios';

// helper function to enable DRY code
export function getToken() {
    return localStorage.getItem('token')
}

// Axios helper function
const axiosWithAuth = () => {
    return axios.create({
        baseURL: `http://localhost:5000/api`,
        headers: {
            Authorization: getToken()
        }
    });
};


export default axiosWithAuth