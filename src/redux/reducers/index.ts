import {combineReducers} from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  authReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export default rootReducer;
