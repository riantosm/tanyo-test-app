import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import Toast from 'react-native-toast-notifications';
import {Snackbar} from '~components/atoms';
// import spaces from '~constants/spaces';
import Root from '~Root';
import {Provider} from 'react-redux';
import spaces from '~constants/spaces';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '~redux/store';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['id'] = {
  monthNames: [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktomer',
    'November',
    'Desember',
  ],
  monthNamesShort: [
    'Jan.',
    'Feb.',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Agu',
    'Sep',
    'Okt',
    'Nov',
    'Des',
  ],
  dayNames: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
  dayNamesShort: ['Min.', 'Sen.', 'Sel.', 'Rab.', 'Kam.', 'Jum.', 'Sab.'],
  today: 'Hari ini',
};
LocaleConfig.defaultLocale = 'id';

const App = () => {
  LogBox.ignoreLogs(['[react-native-gesture-handler]']);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
};

export default App;
