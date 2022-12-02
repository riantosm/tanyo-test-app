import {StyleSheet} from 'react-native';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import {widthPercent} from '~helpers';

const styleConfig = ({isDark}: {isDark?: boolean}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
    },
    wrapperForm: {
      width: widthPercent(100) - spaces.sm * 2,
    },
  });

export default styleConfig;
