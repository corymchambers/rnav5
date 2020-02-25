import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '../node_modules/@react-navigation/native';
import { createStackNavigator } from '../node_modules/@react-navigation/stack';

import Login from '../screens/Login'
import Profile from '../screens/Profile'
import Contact from '../screens/Contact'
import Home from '../screens/Home'

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
