import React from 'react';
import {View} from 'react-native';
// @ts-ignore
import {ToastProps} from 'react-native-toast-notifications';
import colors from '~constants/colors';
import Phrase from '../Phrase';
import styles from './styles';

interface SnackbarProps extends ToastProps {
  type: 'success' | 'danger';
}

// @ts-ignore
const Snackbar = ({message, type = 'success'}: SnackbarProps) => (
  <View style={[styles.container, styles[type]]}>
    {/* @ts-ignore */}
    <Phrase textColor={colors.white} type="content/bold">
      {message}
    </Phrase>
  </View>
);

export default Snackbar;
