import 'react-native-gesture-handler'
import * as React from 'react'
import { Button } from 'react-native'

import { NavigationContainer } from '../node_modules/@react-navigation/native'
import { createStackNavigator } from '../node_modules/@react-navigation/stack'

import Login from '../screens/Login'
import Profile from '../screens/Profile'
import Contact from '../screens/Contact'
import Home from '../screens/Home'

const Stack = createStackNavigator()

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            title: 'DEFAULT TITLE',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        }}>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'yellow',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title='Info'
                color='#fff'
              />
            )
          }}
        />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Contact' component={Contact} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
