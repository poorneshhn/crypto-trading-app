import axios from 'axios';
import { getVariable } from '../helpers/environment.utils';

export const axiosInstance = axios.create({
    baseURL: getVariable("VITE_ENV_API_URL"),
})