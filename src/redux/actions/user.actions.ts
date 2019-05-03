export enum ActionTypes {
  AUTHENTICATED_USER = 'AUTHENTICATED_USER'
};

export interface AuthenticatedUserAction { type: ActionTypes.AUTHENTICATED_USER, payload: { token: string } };

export const authenticatedUser = (token: string): AuthenticatedUserAction => ({
    type: ActionTypes.AUTHENTICATED_USER,
    payload: {
      token
    }
});

export type Action = AuthenticatedUserAction;