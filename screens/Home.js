import React from 'react'
import { StyleSheet, Text, Button, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home ({ route, navigation }) {
  const { phrase } = route.params
  const [count, setCount] = React.useState(0)

  navigation.setOptions({
    headerRight: () => (
      <Button onPress={() => setCount(c => c + 1)} title="Update count" />
    ),
  })
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Text>Home {phrase}</Text>
      <Button title='Profile' onPress={() => {navigation.navigate('Profile')}} />
      <Button title='Go back' onPress={() => {navigation.goBack()}} />
      <Text>Count: {count}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});