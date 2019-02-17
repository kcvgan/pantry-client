import { combineReducers } from 'redux';
import * as userReducer from './user.reducer';
import * as productReducer from './product.reducer';

export interface State {
  token: userReducer.State
  products: productReducer.State
};

export const initialState: State = {
  token: userReducer.initialState,
  products: productReducer.initialState
};

export const reducer = combineReducers({
  token: userReducer.reducer,
  products: productReducer.reducer
});