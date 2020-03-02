import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Home ({ route, navigation }) {
  const { phrase } = route.params
  const [count, setCount] = React.useState(0)

  navigation.setOptions({
    headerRight: () => (
      <Button onPress={() => setCount(c => c + 1)} title="Update count" />
    ),
  })
  return (
    <View>
      <Text>Home {phrase}</Text>
      <Button title='Profile' onPress={() => {navigation.navigate('Profile')}} />
      <Button title='Go back' onPress={() => {navigation.goBack()}} />
      <Text>Count: {count}</Text>
    </View>
  )
}
