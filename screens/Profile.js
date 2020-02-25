import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Profile ({navigation}) {
    return (
        <View>
            <Text>
                Profile
            </Text>
            <Button title='Login' onPress={() => {navigation.navigate('Login')}} />
        </View>
    )
}
