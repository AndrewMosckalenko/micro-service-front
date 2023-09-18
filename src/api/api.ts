import axios from "axios";

import { getTokenFromLocalStorage } from "../utils";


export const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        "Content-Type": 'application/x-www-form-urlencoded',
    }
})