import React from 'react';
import {View} from 'react-native';
import {Phrase} from '~components/atoms';
import styleConfig from './styles';

const SCREEN_NAME = 'Home';

interface HomeProps {}

const Home = ({}: HomeProps) => {
  const styles = styleConfig({});
  return (
    <View style={styles.container}>
      <Phrase>Home</Phrase>
    </View>
  );
};

export default Home;
