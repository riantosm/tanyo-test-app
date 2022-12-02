import {Dispatch} from 'react';

export interface IAuthAction {
  readonly type: 'ON_LOGIN' | 'ON_LOGOUT';
  payload?: any;
}

export const onLogin = () => {
  return async (dispatch: Dispatch<IAuthAction>) => {
    dispatch({type: 'ON_LOGIN'});
  };
};

export type AuthAction = IAuthAction;
