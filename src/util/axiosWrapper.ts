import axios, { AxiosInstance } from 'axios';

export const API_BASE_URL = "https://pantr.herokuapp.com/api";

const axiosWrapper: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export default axiosWrapper;