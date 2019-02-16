import axiosWrapper from '../util/axiosWrapper';
import User from '../models/user.model';
import { AxiosResponse, AxiosError } from 'axios';

export const signIn = (user: User): Promise<string> => {
  return axiosWrapper.post('/user/signin', user)
    .then((response: AxiosResponse) => {
      const { token } = response.data;
      axiosWrapper.defaults.headers.common['token'] = token;
      return token;
    }).catch((error: AxiosError) => {
      return error.code;
    })
};

export const signUp = (user: User): Promise<boolean> => {
  return axiosWrapper.post('/user/signup', user)
    .then((response: AxiosResponse) => {
      return true;
    }).catch((error: AxiosError) => {
      return false;
    })
};