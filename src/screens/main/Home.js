import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import navigationStrings from '../../navigations/navigationStrings'

const Home = ({navigation}) => {
  return (
    <View>
    <Button title='Dashborad' onPress={()=>navigation.navigate(navigationStrings.DASHBORARD)} />
    <Text style={{color:'red'}}>This is Home page</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})