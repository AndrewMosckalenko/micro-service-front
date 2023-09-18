import axios from "axios";

import { getTokenFromLocalStorage } from "../utils";
import { BACKEND_URL } from "../config";

export const api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
