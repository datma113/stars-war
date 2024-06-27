import axios from 'axios';

export const swapiInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});
