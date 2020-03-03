import React from 'react'
import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Contact ({navigation}) {
  return (
    <SafeAreaView>
      <Text>Contact</Text>
      <Button title='Profile' onPress={() => {navigation.navigate('Profile')}} />
    </SafeAreaView>
  )
}
