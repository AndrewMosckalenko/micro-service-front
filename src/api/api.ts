import axios from "axios";


export const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        Authorization: 'Ba',
        "Content-Type": 'application/x-www-form-urlencoded',
    }
})