import React from 'react';
import {SvgProps} from 'react-native-svg';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import EyeIcon from './Eye.svg';
import EyeCloseIcon from './EyeClose.svg';

interface IconProps extends SvgProps {
  iconColor?: string;
  size?: number;
  type?: 'open' | 'close';
}

const Eye = ({
  iconColor = colors.grey1,
  size = spaces.medium,
  type = 'open',
}: IconProps) =>
  type == 'open' ? (
    <EyeIcon fill={iconColor} width={size} height={size} />
  ) : (
    <EyeCloseIcon width={size} height={size} />
  );

export default Eye;
