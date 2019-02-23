import Product, { Products } from "../../models/product.model";

export enum ActionTypes {
  STORE_PRODUCTS = 'STORE_PRODUCTS',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
  ADD_PRODUCT = 'ADD_PRODUCT',
  INCREMENT_QUANTITY = 'INCREMENT_QUANTITY',
  DECREMENT_QUANTITY = 'DECREMENT_QUANTITY'
};

export interface StoreProductsAction { type: ActionTypes.STORE_PRODUCTS, payload: { products: Products } };

export const storeProducts = (products: Products): StoreProductsAction => ({
  type: ActionTypes.STORE_PRODUCTS,
  payload: {
    products
  }
});

export interface DeleteProductAction { type: ActionTypes.DELETE_PRODUCT, payload: { product: Product } };

export const deleteProduct = (product: Product): DeleteProductAction => ({
  type: ActionTypes.DELETE_PRODUCT,
  payload: {
    product
  }
});

export interface AddProductAction { type: ActionTypes.ADD_PRODUCT, payload: { product: Product } };

export const addProduct = (product: Product): AddProductAction => ({
  type: ActionTypes.ADD_PRODUCT,
  payload: {
    product
  }
});

export interface IncrementQuantityAction { type: ActionTypes.INCREMENT_QUANTITY, payload: { product: Product } };

export const incrementQuantity = (product: Product): IncrementQuantityAction => ({
  type: ActionTypes.INCREMENT_QUANTITY,
  payload: {
    product
  }
});

export interface DecrementQuantityAction { type: ActionTypes.DECREMENT_QUANTITY, payload: { product: Product } };

export const decrementQuantity = (product: Product): DecrementQuantityAction => ({
  type: ActionTypes.DECREMENT_QUANTITY,
  payload: {
    product
  }
});

export type Action = StoreProductsAction | DeleteProductAction | AddProductAction | IncrementQuantityAction | DecrementQuantityAction;