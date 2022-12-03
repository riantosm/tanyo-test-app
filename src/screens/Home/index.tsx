import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StatusBar, View} from 'react-native';
import {Button, Gap, Phrase} from '~components/atoms';
import styleConfig from './styles';
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from 'react-native-calendars';
import moment from 'moment';
import Assets from '~assets';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import {dummyData} from '~assets/data/dummy';
import {IDataDummy} from '~types/services';
import PushNotification, {Importance} from 'react-native-push-notification';
import {useDispatch} from 'react-redux';
import {onLogout} from '~redux/actions';
import {useNavigate} from '~hooks';

const SCREEN_NAME = 'Home';

interface HomeProps {}

const Home = ({}: HomeProps) => {
  const [selectedDate, setSelectedDate] = useState(
    moment().format('YYYY-MM-DD'),
  );
  const markerDate = dummyData.reduce(
    (acc, cur) => ({
      ...acc,
      [moment(cur.timestamp).format('YYYY-MM-DD')]: {marked: true},
    }),
    {},
  );

  const styles = styleConfig({});
  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: 'channel-id', // (required)
        channelName: 'My channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      created => {
        // console.log(`createChannel returned '${created}'`); // (optional) callback returns whether the channel was created, false means it already existed.
      },
    );
  }, []);

  useEffect(() => {
    console.log('----');
    PushNotification.cancelAllLocalNotifications();
    dummyData.map(data => {
      // PushNotification.cancelLocalNotification(`${data.id}`);
      console.log('🚀', moment(data.timestamp).format('LLL'));
      PushNotification.localNotificationSchedule({
        date: new Date(data.timestamp + 2 * 1000),
        title: 'Notification scheduled',
        message: data.message,
        channelId: 'channel-id',
        messageId: `${data.id}`,
      });
    });
  }, []);

  const handleLogout = () => {
    console.log('handleLogout');
    PushNotification.cancelAllLocalNotifications();
    dispatch(onLogout());
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  const ListRenderItem = useCallback(
    ({item, index}: {item: IDataDummy; index: number}) => (
      <View style={styles.wrapperList}>
        <Phrase>
          Jadwal:{' '}
          <Phrase type="content/bold">
            {moment(item.timestamp).format('LLL')}
          </Phrase>
        </Phrase>
      </View>
    ),
    [dummyData],
  );

  const ListKeyExtractor = useCallback(
    (item: IDataDummy, i: number) => `k-${i}`,
    [dummyData],
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <Gap
        vertical={spaces.sm}
        horizontal={spaces.sm}
        style={{backgroundColor: colors.white}}>
        <View style={styles.rowHeader}>
          <Phrase type="title/bold">Tanyo Test</Phrase>
          <Button onPress={handleLogout}>
            <Phrase>Keluar</Phrase>
          </Button>
        </View>
      </Gap>
      <Gap vertical={spaces.xxl} />
      <Calendar
        initialDate={selectedDate}
        markedDates={{...markerDate}}
        onDayPress={day => {
          setSelectedDate(day.dateString);
        }}
        // @ts-ignore
        theme={styles.themeCalendar}
      />
      <Gap vertical={spaces.sm} horizontal={spaces.sm}>
        <Phrase>List Schedule</Phrase>
      </Gap>
      <FlatList
        listKey={'list-schedule'}
        contentContainerStyle={{marginHorizontal: spaces.s}}
        style={{marginBottom: spaces.sm, flex: 1}}
        data={dummyData.filter(
          data => moment(data.timestamp).format('YYYY-MM-DD') === selectedDate,
        )}
        keyExtractor={ListKeyExtractor}
        renderItem={ListRenderItem}
        ItemSeparatorComponent={() => <Gap vertical={spaces.sm} />}
        ListEmptyComponent={
          <Phrase center textColor={colors.grey1} type="caption/regular">
            Data tidak ditemukan
          </Phrase>
        }
      />
    </View>
  );
};

export default Home;
