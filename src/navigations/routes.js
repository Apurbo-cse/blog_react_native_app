// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

function Routes() {
  const userData=useSelector((state)=>state.auth.userData);
  console.log('data is ===> ',userData.status)

  return (
    <NavigationContainer >
      <Stack.Navigator  screenOptions={{ headerShown: false,headerTitleAlign:'center' }}>
       {userData && userData?.status==200?MainStack(Stack):AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;