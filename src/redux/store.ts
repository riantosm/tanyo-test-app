import AsyncStorage from '@react-native-community/async-storage';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const persistConfig = {
  key: 'tanyo',
  storage: AsyncStorage,
  blacklist: [
    // non persist
    'globalReducer',
    'groupChatReducer',
    'paymentReducer',
    'liveReducer',
  ],
  whitelist: ['authReducer', 'productReducer'],
};
const presistedReducer = persistReducer(persistConfig, rootReducer);
const store: any = createStore(
  presistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
const persistor = persistStore(store);
export {persistor, store};
