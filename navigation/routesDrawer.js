import 'react-native-gesture-handler'
import * as React from 'react'

import { NavigationContainer } from '../node_modules/@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Profile from '../screens/Profile'
import Contact from '../screens/Contact'
import Home from '../screens/Home'

const Drawer = createDrawerNavigator()

function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} initialParams={{phrase: 'Default Phrase'}}/>
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
