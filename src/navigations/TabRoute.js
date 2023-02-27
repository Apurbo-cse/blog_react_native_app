import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrings from "./navigationStrings";
import { Home, Profile} from '../screens';
import { Ionicons } from '@expo/vector-icons';
import HomeStack from './HomeStack';
const Tab = createBottomTabNavigator();

export default function TabRoute() {
  return (

    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen
        name={navigationStrings.HOMESTACK} 
        component={HomeStack} />

<Tab.Screen
        name={navigationStrings.PROFILE} 
        component={Profile} />
    </Tab.Navigator>

  );
}