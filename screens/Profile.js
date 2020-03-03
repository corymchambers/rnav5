import React from 'react'
import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Profile ({navigation}) {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <Button title='Login' onPress={() => {navigation.navigate('Login')}} />
    </SafeAreaView>
  )
}
