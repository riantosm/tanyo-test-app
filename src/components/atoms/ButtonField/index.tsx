import React, {PropsWithChildren} from 'react';
import {ActivityIndicator, TouchableOpacityProps, View} from 'react-native';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import {AdapativeTextTypes} from '~types';
import Button from '../Button';
import Phrase from '../Phrase';
import styles from './styles';

interface ButtonFieldProps extends TouchableOpacityProps {
  isIcon?: boolean;
  iconSize?: {width: number | undefined; height: number | undefined} | number;
  value?: string;
  backgroundColor?: string;
  iconBackgroundColor?: string;
  textColor?: string;
  textType?: AdapativeTextTypes;
  isLoading?: boolean;
  isCircle?: boolean;
  circle?: boolean;
  withoutShadow?: boolean;
  isSticky?: boolean;
  customChildren?: boolean;
}

const ButtonField = ({
  children,
  isIcon,
  iconSize = {width: 30, height: 30},
  backgroundColor = colors.primary,
  iconBackgroundColor = colors.white,
  value,
  textColor = colors.white,
  textType = 'subheading/bold',
  disabled,
  isLoading,
  isCircle,
  circle,
  withoutShadow,
  isSticky,
  customChildren,
  ...props
}: PropsWithChildren<ButtonFieldProps>) => {
  const insets = useSafeAreaInsets();
  let widthIcon = typeof iconSize == 'number' ? iconSize : iconSize.width;
  let heightIcon = typeof iconSize == 'number' ? iconSize : iconSize.height;
  // const isCircle = widthIcon == 38 && heightIcon == 38;
  return (
    // <CustomShadow
    //   shadowColor={colors.shadowGrey}
    //   isCircle={isCircle}
    //   withoutShadow={withoutShadow}>
    <View
      style={[
        {
          width: '100%',
          // backgroundColor: 'white',
          borderRadius: circle ? 100 : isCircle ? 4 : 15,
        },
        isSticky && {
          // position: 'absolute',
          bottom: insets.bottom,
          paddingBottom: insets.bottom ? 0 : spaces.sm,
          width: '100%',
          padding: spaces.sm,
          backgroundColor: colors.white,
        },
      ]}>
      <Button
        {...props}
        onPress={disabled || isLoading ? () => {} : props.onPress}
        style={[
          !isIcon && styles.field,
          isIcon
            ? {
                // borderWidth: 1,
                width: widthIcon,
                height: heightIcon,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: circle ? 100 : isCircle ? 4 : 15,
                backgroundColor: iconBackgroundColor,
              }
            : {
                backgroundColor:
                  disabled || isLoading ? colors.grey1 : backgroundColor,
              },
          props.style,
        ]}>
        {!!isLoading && (
          <Animated.View entering={FadeIn}>
            <ActivityIndicator color={colors.white} />
          </Animated.View>
        )}
        {!isLoading && !isIcon && (
          <Animated.View entering={FadeIn}>
            {customChildren ? (
              children
            ) : (
              <Phrase textColor={textColor} type={textType}>
                {children}
              </Phrase>
            )}
          </Animated.View>
        )}
        {!!isIcon && children}
        {/* {!!isLoading ? (
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <ActivityIndicator color={colors.white} />
          </Animated.View>
        ) : isIcon ? (
          <>{children}</>
        ) : (
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <Phrase textColor={textColor} type={textType}>
              {children}
            </Phrase>
          </Animated.View>
        )} */}
        {/* {children} */}
      </Button>
    </View>
    // </CustomShadow>
  );
};

export default ButtonField;
