
import React from 'react'
import navigationStrings from './navigationStrings';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Greetins, Home ,Create, Greettings_All, Details, } from '../screens';

const HomeStackScreen = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <HomeStackScreen.Navigator  screenOptions={{ headerShown: false }}>

      <HomeStackScreen.Screen name={navigationStrings.HOME} component={Home} />
      <HomeStackScreen.Screen name={navigationStrings.GREETINGS} component={Greetins} />
      <HomeStackScreen.Screen name={navigationStrings.CREATE} component={Create} />
      <HomeStackScreen.Screen name={navigationStrings.GREETINGS_All} component={Greettings_All} />
      <HomeStackScreen.Screen name={navigationStrings.DETAILS} component={Details} />
      
    </HomeStackScreen.Navigator>
  )
}

export default HomeStack
