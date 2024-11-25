import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplashSCreen = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000'

        }}>
            <Text style={{
                fontSize: 30,
                color: '#fff',

            }}>ultrafly software solution</Text>
        </View>
    )
}

export default SplashSCreen

const styles = StyleSheet.create({})