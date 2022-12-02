import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useSelector} from 'react-redux';
import {ApplicationState} from '~redux/reducers';
import {Home, Login} from '~screens';
import {RootStackParamList} from '~types';

const Stack = createStackNavigator<RootStackParamList>();

const MainRoute = () => {
  const {authReducer} = useSelector((state: ApplicationState) => state);

  return (
    <Stack.Navigator
      initialRouteName={authReducer.isLogin ? 'Home' : 'Login'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default MainRoute;
