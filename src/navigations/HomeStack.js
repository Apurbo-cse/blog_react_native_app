import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import navigationStrings from './navigationStrings';
import { Home } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStackScreen = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <HomeStackScreen.Navigator  screenOptions={{ headerShown: false }}>
      <HomeStackScreen.Screen name={navigationStrings.HOME} component={Home} />
    </HomeStackScreen.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})