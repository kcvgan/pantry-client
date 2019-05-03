import axiosWrapper from '../util/axiosWrapper';
import User from '../models/user.model';
import { AxiosResponse, AxiosError } from 'axios';
import LoginRequest from '../models/rest/login.request';
import on from '../util/on';

export const signIn = async (loginRequest: LoginRequest): Promise<[string, AxiosError]> => {
  const [token, error] = await on<string, AxiosError>(axiosWrapper.post('/auth/signin', loginRequest));
  if (token) {
    axiosWrapper.defaults.headers.common['token'] = token;
  }
  return [token, error];
};

export const signUp = (user: User): Promise<boolean> => {
  return axiosWrapper.post('/auth/signup', user)
    .then((response: AxiosResponse) => {
      return true;
    }).catch((error: AxiosError) => {
      return false;
    })
};