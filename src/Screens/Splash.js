import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('VideoScreen')
        }, 100);
    }, [])

    return (
        <View>
            <Text>Splash</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})