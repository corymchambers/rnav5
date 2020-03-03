import React from 'react'
import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Login ({navigation}) {
  return (
    <SafeAreaView>
      <Text>Login</Text>
      <Button title='Go Home' onPress={() => {navigation.navigate('Home', {phrase: 'test'})}} />
      <Button
        onPress={() => navigation.navigate('MyModal')}
        title="Open Modal"
      />
    </SafeAreaView>
  )
}
