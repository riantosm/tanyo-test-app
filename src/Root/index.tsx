import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
import MainRoute from '~routes';

const Root = () => {
  return (
    <NavigationContainer>
      <MainRoute />
    </NavigationContainer>
  );
};

export default Root;
