import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import navigationStrings from './navigationStrings';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens';


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