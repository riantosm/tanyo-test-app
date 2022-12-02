import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home, Login} from '~screens';
import {RootStackParamList} from '~types';

const Stack = createStackNavigator<RootStackParamList>();

const MainRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default MainRoute;
