import React, {useCallback, useState} from 'react';
import {FlatList, StatusBar, View} from 'react-native';
import {Gap, Phrase} from '~components/atoms';
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

  const ListRenderItem = useCallback(
    ({item, index}: {item: IDataDummy; index: number}) => (
      <View style={{backgroundColor: colors.white, padding: spaces.s}}>
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
      <Calendar
        initialDate={selectedDate}
        markedDates={{...markerDate}}
        onDayPress={day => {
          setSelectedDate(day.dateString);
        }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: 'blue',
          indicatorColor: 'blue',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
      <Gap vertical={spaces.sm} horizontal={spaces.sm}>
        <Phrase>List Schedule</Phrase>
      </Gap>
      <FlatList
        listKey={'list-schedule'}
        contentContainerStyle={{marginHorizontal: spaces.s}}
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
