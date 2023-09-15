import axios from "axios";


export const api = axios.create({
    baseURL: '',
    headers: {
        Authorization: 'Ba',
        "Content-Type": 'application/x-www-form-urlencoded',
    }
})