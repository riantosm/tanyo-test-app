import React from 'react';
import {PropsWithChildren} from 'react';
import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import {neutral} from '~constants/colors';
import fonts, {FontFamilyTypes} from '~constants/fonts';
import {AdapativeTextTypes} from '~types';

type AdaptiveFamilyTypes =
  | 'body'
  | 'caption'
  | 'content'
  | 'heading'
  | 'subheading'
  | 'title';

interface PhraseProps extends TextProps {
  type?: AdapativeTextTypes;
  textColor?: string;
  center?: boolean;
}

const adaptiveStyleGenerator = (obj: TextStyle): TextStyle =>
  StyleSheet.create({obj}).obj;

const styleSelector = (textType: AdapativeTextTypes) => {
  const raw: string[] = textType?.split('/');
  const extractedType: [AdaptiveFamilyTypes, FontFamilyTypes | 'regular'] = [
    //@ts-ignore
    raw[0],
    //@ts-ignore
    raw[1],
  ];
  return adaptiveStyleGenerator(
    fonts[extractedType[0]](
      extractedType[1] === 'regular' ? 'normal' : extractedType[1],
    ),
  );
};

const Phrase = ({
  textColor = neutral.grey3,
  type = 'content/regular',
  children,
  center = false,
  style,
  ...props
}: PropsWithChildren<PhraseProps>) => {
  const formulatedStyle: TextStyle = styleSelector(type);
  return (
    <Text
      {...props}
      style={[
        {color: textColor, textAlign: center ? 'center' : undefined},
        formulatedStyle,
        style,
      ]}>
      {children}
    </Text>
  );
};

export default Phrase;
