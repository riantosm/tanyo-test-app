import {StyleSheet} from 'react-native';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import {winWidthPercent} from '~helpers';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.success,
    paddingVertical: spaces.semiMedium,
    borderRadius: spaces.small,
    width: winWidthPercent(100) - spaces.semiLarge * 2,
    paddingHorizontal: spaces.medium,
  },

  danger: {backgroundColor: colors.danger},
  success: {backgroundColor: colors.success},
});

export default styles;
