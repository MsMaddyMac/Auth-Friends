import axios from 'axios';



// Axios helper function
const axiosWithAuth = () => {
    // Helper function that gets token from localStorage
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: `http://localhost:5000/api`,
        headers: {
            Authorization: token
        }
    });
};


export default axiosWithAuth