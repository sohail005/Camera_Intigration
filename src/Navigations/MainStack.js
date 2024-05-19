import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import CameraScreen from '../Screens/CameraScreen';
import VideoScreen from '../Screens/VideoScreen';


const Stack = createNativeStackNavigator();
const MainStack = () => {

  return (
   <Stack.Navigator initialRouteName='Splash' screenOptions={
      ({ route, navigation }) => ({
        headerShown: false,
        gestureEnabled: false,

      })
    }>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} />
        
    </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})