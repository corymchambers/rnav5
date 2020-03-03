import 'react-native-gesture-handler'
import * as React from 'react'

import { NavigationContainer } from '../node_modules/@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Profile from '../screens/Profile'
import Contact from '../screens/Contact'
import Home from '../screens/Home'

const Tab = createBottomTabNavigator()

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} initialParams={{phrase: 'Default Phrase'}}/>
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
