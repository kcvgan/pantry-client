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
      return {
        ...state,
        products: state.products.filter(({ id }) => id !== product.id)
      }
    }
    case ActionTypes.ADD_PRODUCT: {
      const { product } = action.payload;
      return {
        ...state,
        products: [...state.products, product]
      }
    }
    case ActionTypes.INCREMENT_QUANTITY: {
      const { product } = action.payload;
      return {
        ...state,
        products: state.products.map(p => {
          if (p.id === product.id) {
            p.quantity = parseInt(p.quantity) + 1 + '';
          }
          return p;
        })
      }
    }
    case ActionTypes.DECREMENT_QUANTITY: {
      const { product } = action.payload;
      return {
        ...state,
        products: state.products.map(p => {
          if (p.id === product.id) {
            if (parseInt(p.quantity) !== 0) {
              p.quantity = parseInt(p.quantity) - 1 + '';
            }
          }
          return p;
        })
      }
    }

    default:
      return state;
  }
};