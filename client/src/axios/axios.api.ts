import axios from "axios";
import {getToken} from "../helpers/localstorage.helper";

export const instanse = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        Authorization: `Bearer ` + getToken() || '',
    }
})