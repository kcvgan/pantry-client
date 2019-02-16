import { combineReducers } from 'redux';
import * as fromUser from './user.reducer';

export interface State {
  token: fromUser.State
};

export const initialState: State = {
  token: fromUser.initialState
};

export const reducer = combineReducers<State> ({
  token: fromUser.userReducer
});