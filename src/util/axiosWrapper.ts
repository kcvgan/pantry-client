import axios, { AxiosInstance } from 'axios';

export const API_BASE_URL = "http://localhost:8000";

const axiosWrapper: AxiosInstance = axios.create({
  baseURL: API_BASE_URL
});

export default axiosWrapper;