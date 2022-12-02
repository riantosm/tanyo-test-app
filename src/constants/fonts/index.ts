import {TextStyle} from 'react-native';
import textSize from '~constants/textSizes';

type FontFamilyTypes = 'bold' | 'normal';

/**
 * @param fontFamily "black"
 * @returns `StyleProp<TextStyle>`
 */

const heading = (fontFamily: FontFamilyTypes) => ({
  fontSize: textSize['32'],
  fontWeight: fontFamily,
});

const title = (fontFamily: FontFamilyTypes): TextStyle => ({
  fontSize: textSize['24'],
  fontWeight: fontFamily,
});

const body = (fontFamily: FontFamilyTypes) => ({
  fontSize: textSize['18'],
  fontWeight: fontFamily,
});

const subheading = (fontFamily: FontFamilyTypes): TextStyle => ({
  fontSize: textSize['16'],
  fontWeight: fontFamily,
});

const content = (fontFamily: FontFamilyTypes): TextStyle => ({
  fontSize: textSize['14'],
  fontWeight: fontFamily,
});

const caption = (fontFamily: FontFamilyTypes): TextStyle => ({
  fontSize: textSize['12'],
  fontWeight: fontFamily,
});

const fonts = {body, title, content, caption, subheading, heading} as const;

export type {FontFamilyTypes};
export {body, title, content, caption, subheading, heading};
export default fonts;
