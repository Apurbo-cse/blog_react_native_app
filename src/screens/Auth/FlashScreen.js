import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlashScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FlashScreen</Text>
    </View>
  )
}

export default FlashScreen

const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center'
}

})