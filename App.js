import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/Navigations/MainStack'

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar translucent={true} />

      <NavigationContainer>

        <MainStack />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})