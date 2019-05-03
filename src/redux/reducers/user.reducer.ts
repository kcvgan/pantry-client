import { Action, ActionTypes } from "../actions/user.actions";

export interface State {
  token?: string
};

export const initialState: State = {
  token: undefined
};

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.AUTHENTICATED_USER: {
      const { token } = action.payload;
      return {
        ...state,
        token: token
      }
    }
    default:
      return state;
  }
};