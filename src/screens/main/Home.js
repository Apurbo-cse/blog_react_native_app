import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../constants/theme';
import MainHeader from '../../components/MainHeader';

const Home = () => {

  return (
    <View style={[
      styles.container,
      {
        flexDirection: 'column',
        height: 200,
      },
    ]}
    >
      <MainHeader />
      <Text>Home</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});


export default Home