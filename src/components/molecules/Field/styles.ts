import {StyleSheet} from 'react-native';
import colors from '~constants/colors';
import spaces from '~constants/spaces';

const styleConfig = ({isDark}: {isDark?: boolean}) =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: colors.grey4,
      paddingVertical: spaces.sss,
      paddingHorizontal: spaces.s,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    textInput: {
      padding: 0,
      // borderWidth: 1,
      flex: 1,
    },
  });

export default styleConfig;
