import {IAuthAction} from '~redux/actions';
import {IAuthStateRedux} from '~types';

const initialState: IAuthStateRedux = {
  isLogin: false,
};

const authReducer = (
  state: IAuthStateRedux = initialState,
  action: IAuthAction,
) => {
  switch (action.type) {
    case 'ON_LOGIN':
      return <IAuthStateRedux>{
        ...state,
        isLogin: true,
      };
    case 'ON_LOGOUT':
      return <IAuthStateRedux>{
        ...state,
        isLogin: false,
      };

    default:
      return state;
  }
};

export default authReducer;
