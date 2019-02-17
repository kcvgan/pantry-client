import axiosWrapper from '../util/axiosWrapper';
import { Product, Products } from '../models/product.model';
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

export const addProduct = (product: Product): Promise<boolean> => {
  return axiosWrapper.post('/products/create', product)
    .then((response: AxiosResponse) => {
      return true;
    })
    .catch((error: AxiosError) => {
      return false;
    });
};

export const deleteProduct = (product: Product): Promise<boolean> => {
  return axiosWrapper.delete('/products/delete', { data: { id: product.id } })
    .then((response: AxiosResponse) => {
      return true;
    })
    .catch((error: AxiosError) => {
      return false;
    });
};
