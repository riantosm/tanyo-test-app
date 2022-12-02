import React, {PropsWithChildren} from 'react';
import {View, ViewProps} from 'react-native';
// import {diagonalDp} from '~helpers';

interface GapProps {
  vertical?: number;
  horizontal?: number;
  adapted?: boolean;
}

/**
 * View component for filling gaps. Could receive children.
 * @param vertical paddingVertical value.
 * @param horizontal paddingHorizontal value.
 * @param adapted determine if the value needs to be adapted with diagonalDp or not.
 * @return a view component.
 */
const Gap = ({
  vertical,
  horizontal,
  children,
  adapted = false,
  ...props
}: PropsWithChildren<GapProps & ViewProps>) => {
  const verticalValue = (vertical || 0) / (!!children ? 1 : 2);
  const horizontalValue = (horizontal || 0) / (!!children ? 1 : 2);
  // const paddingVertical = adapted ? diagonalDp(verticalValue) : verticalValue;
  // const paddingHorizontal = adapted
  //   ? diagonalDp(horizontalValue)
  //   : horizontalValue;
  const paddingVertical = verticalValue;
  const paddingHorizontal = horizontalValue;
  return (
    <View
      style={[
        vertical !== undefined && {
          paddingVertical,
        },
        horizontal !== undefined && {
          paddingHorizontal,
        },
        props.style,
      ]}>
      {children}
    </View>
  );
};

export default Gap;
