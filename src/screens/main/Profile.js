import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CustomButton from '../../components/CustomButton'
import actions from '../../redux/actions'
import { useState } from 'react'

const Profile = () => {
  const userData=useSelector((state)=>state.auth.userData);
  const [loading,setLoading]=useState(false);
  function handleLogout(){
    setLoading(true);
    setTimeout(()=>{
actions.logout()
setLoading(false)
    },2000)
  }
  return (
    <View>
      <Text>Name: {userData.name}</Text>
      <CustomButton title={'Logout'} handleNavigation={handleLogout} isLoading={loading} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})