import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import Toast from 'react-native-toast-notifications';
import {Snackbar} from '~components/atoms';
// import spaces from '~constants/spaces';
import Root from '~Root';
import {Provider} from 'react-redux';
import spaces from '~constants/spaces';
// import {PersistGate} from 'redux-persist/integration/react';
// import {store, persistor} from '~redux/store';

const App = () => {
  LogBox.ignoreLogs(['[react-native-gesture-handler]']);
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    <>
      <Root />
      <Toast
        dangerColor="red"
        warningColor="orange"
        normalColor="gray"
        offsetBottom={spaces.large}
        duration={2500}
        //@ts-ignore
        ref={ref => (global['toast'] = ref)}
        //@ts-ignore
        renderToast={Snackbar}
      />
    </>
    //   </PersistGate>
    // </Provider>
  );
};

export default App;
