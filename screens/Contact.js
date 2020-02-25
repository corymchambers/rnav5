import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Contact ({navigation}) {
    return (
        <View>
            <Text>
                Contact
            </Text>
            <Button title='Profile' onPress={() => {navigation.navigate('Profile')}} />
        </View>
    )
}
