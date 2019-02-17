import Product, { Products } from "../../models/product.model";

export enum ActionTypes {
  STORE_PRODUCTS = 'STORE_PRODUCTS',
  DELETE_PRODUCT = 'DELETE_PRODUCT'
};

export interface StoreProductsAction { type: ActionTypes.STORE_PRODUCTS, payload: { products: Products } };

export const storeProducts = (products: Products): StoreProductsAction => ({
  type: ActionTypes.STORE_PRODUCTS,
  payload: {
    products
  }
});

export interface DeleteProductAction { type: ActionTypes.DELETE_PRODUCT, payload: { product: Product }};

export const deleteProduct = (product: Product): DeleteProductAction => ({
  type: ActionTypes.DELETE_PRODUCT,
  payload: {
    product
  }
});

export type Action = StoreProductsAction | DeleteProductAction;