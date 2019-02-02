import axios, { AxiosInstance } from 'axios';

export const API_BASE_URL = "https://pantr-api.herokuapp.com";

const axiosWrapper: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lQGV4YW1wbGUuY29tIiwiX2lkIjoiNWM0ZGIwZjg1NTdhYzg1ZGQ2ZTUyZDhjIiwiaWF0IjoxNTQ5MTI2MDA3LCJleHAiOjE1NDkxMzMyMDd9.twp6jdq_Oc8hxGhkZgU3Wz7oqYrxr6Tqap3gs9Ks8P8',
  }
});

export default axiosWrapper;