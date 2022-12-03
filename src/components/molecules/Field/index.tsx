import React, {useState} from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import {Button, Phrase} from '~components/atoms';
import colors from '~constants/colors';
import styleConfig from './styles';

const SCREEN_NAME = 'Field';

interface FieldProps {
  textInputProps: TextInputProps;
  staticLeft?: {
    render: JSX.Element;
    action?: () => void;
  };
}

const Field = ({textInputProps, staticLeft}: FieldProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const styles = styleConfig({});
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Field"
        style={[styles.textInput]}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(true)}
        placeholderTextColor={colors.grey1}
        {...textInputProps}
      />
      {!!staticLeft?.render ? (
        <Button style={{}} onPress={staticLeft.action}>
          {staticLeft.render}
        </Button>
      ) : null}
    </View>
  );
};

export default Field;
