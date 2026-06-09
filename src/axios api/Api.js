import axios from "axios";


const api = axios.create({
    baseURL: "https://intern-directory-backend-1.onrender.com/api"
});
export default api;