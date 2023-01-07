import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';
import BottomNavigator from './BottomNavigator';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator  screenOptions={{
        headerShown: false
      }}>
    <Stack.Screen name="Landing" component={LandingScreen} />
    <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
  </Stack.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})