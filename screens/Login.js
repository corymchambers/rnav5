import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Login ({navigation}) {
  return (
    <View>
      <Text>Login</Text>
      <Button title='Go Home' onPress={() => {navigation.navigate('Home', {phrase: 'test'})}} />
      <Button
        onPress={() => navigation.navigate('MyModal')}
        title="Open Modal"
      />
    </View>
  )
}
