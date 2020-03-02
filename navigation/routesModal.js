import 'react-native-gesture-handler'
import * as React from 'react'
import { Button } from 'react-native'

import { NavigationContainer } from '../node_modules/@react-navigation/native'
import { createStackNavigator } from '../node_modules/@react-navigation/stack'

import Login from '../screens/Login'
import Profile from '../screens/Profile'
import Contact from '../screens/Contact'
import Home from '../screens/Home'
import Modal from '../screens/Modal'

const Stack = createStackNavigator()
const MainStack = createStackNavigator()

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen name="Main" component={MainStackScreen} />
        <Stack.Screen name="MyModal" component={Modal} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
//left off here
function MainStackScreen() {
  return (
    <MainStack.Navigator
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
      <MainStack.Screen
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
      <MainStack.Screen name='Profile' component={Profile} />
      <MainStack.Screen name='Contact' component={Contact} />
      <MainStack.Screen name='Home' component={Home} />
    </MainStack.Navigator>
  )
}

export default AppNavigator
