import axiosWrapper from '../util/axiosWrapper';
import { Products } from '../models/product.model';
import { AxiosResponse, AxiosError } from 'axios';

export const getAllProducts = (): Promise<Products> => {
  return axiosWrapper.get('/products/all')
    .then((response: AxiosResponse) => {
      const products: Products = response.data;
      return products;
    })
    .catch((error: AxiosError) => {
      console.log(error);
      return Promise.reject()
    })
};
