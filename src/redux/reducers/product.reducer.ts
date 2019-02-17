import { Products } from "../../models/product.model";
import { Action, ActionTypes } from "../actions/product.actions";

export interface State {
  products: Products
};

export const initialState: State = {
  products: []
};

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.STORE_PRODUCTS: {
      const { products } = action.payload;
      return {
        ...state,
        products: products
      }
    }
    case ActionTypes.DELETE_PRODUCT: {
      const { product } = action.payload;
      if (state.products) {
        return {
          ...state,
          products: state.products.filter(({ id }) => id !== product.id)
        }
      } else {
        return state
      }
    }
    default:
      return state;
  }
};