import React, {PropsWithChildren} from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  GestureResponderEvent,
} from 'react-native';
import useNavigateLock from '~hooks/useNavigateLock';
const Button = ({
  children,
  onPress,
  isIcon,
  iconBackground,
  withLock,
  ...props
}: PropsWithChildren<
  TouchableOpacityProps & {
    isIcon?: boolean;
    iconBackground?: string;
    withLock?: boolean;
  }
>) => {
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
  const lock = useNavigateLock();
  const onButtonPress = (e: GestureResponderEvent) => {
    // ReactNativeHapticFeedback.trigger('impactLight', options);
    if (withLock) {
      if (!lock()) return;
    }
    onPress && onPress(e);
  };
  return React.createElement(
    TouchableOpacity,
    {
      activeOpacity: 0.75,
      onPress: onButtonPress,
      ...props,
      style: [
        props.style,
        isIcon && {
          // borderWidth: 1,
          width: 38,
          height: 38,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 100,
          backgroundColor: iconBackground,
        },
      ],
    },
    children,
  );
};

export default Button;
