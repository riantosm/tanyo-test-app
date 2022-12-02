import {Dimensions, PixelRatio} from 'react-native';

const WINDOW_BASE = {width: 360, height: 800};

const {width, height} = Dimensions.get('screen');
const {width: winWidth, height: winHeight} = Dimensions.get('window');

const phoneRatio = Math.sqrt(winWidth * winWidth + winHeight * winHeight);
const designRatio = Math.sqrt(
  WINDOW_BASE.width * WINDOW_BASE.width +
    WINDOW_BASE.height * WINDOW_BASE.height,
);

const diagonalDp = (pixel: number) => pixel * (phoneRatio / designRatio);

const widthPercent = (percent: number): number =>
  PixelRatio.roundToNearestPixel((width * percent) / 100);
const heightPercent = (percent: number): number =>
  PixelRatio.roundToNearestPixel((height * percent) / 100);

const winHeightPercent = (percent: number): number =>
  PixelRatio.roundToNearestPixel((winHeight * percent) / 100);
const winWidthPercent = (percent: number): number =>
  PixelRatio.roundToNearestPixel((winWidth * percent) / 100);

export {
  widthPercent,
  heightPercent,
  winWidthPercent,
  winHeightPercent,
  diagonalDp,
  WINDOW_BASE,
};
