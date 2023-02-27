import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import TextInputField from '../../components/TextInputField'
import CustomButton from '../../components/CustomButton'
import navigationStrings from '../../navigations/navigationStrings'
import validator from '../../utils/validation';
import { showError, showMessage } from '../../utils/helperFunc'
import actions from '../../redux/actions'


const LoginScreen = ({ navigation }) => {



  const [state, setstate] = useState({
    isLoading: false,
    email: '',
    password: '',
    isSecure: true
  });
  const { email, isLoading, password, isSecure } = state;
  const isVaildData = () => {
    const error = validator({
      email,
      password
    })
    if (error) {
      showError(error)
      return false;
    }
    return true
  }


  async function handleRoute() {
    const checkVaild = isVaildData();
    if (checkVaild) {
      setstate({ ...state, isLoading: true })
      try {
        const res = await actions.login({
          email,
          password
        })

        setstate({ ...state, isLoading: false })
        if (res.status == 200) {
          showMessage('Login succefull')
        }
        else {
          showError('Login Faild')
        }
      } catch (error) {
        console.log(error);
        showError(error.message)
        setstate({ ...state, isLoading: false })
      }


      // navigation.navigate(navigationStrings.SIGNUP);
    }


  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <TextInputField
          label={'Email'}
          placeholder='Enter your Email'

          onChangeText={(e) => setstate({ ...state, email: e })}

        />
        <TextInputField
          label={'Password'}
          placeholder='Enter your Password'
          secureTextEntry={isSecure}
          onChangeText={(e) => setstate({ ...state, password: e })}
        />

        <CustomButton
          isLoading={isLoading}
          title='Login'
          handleNavigation={handleRoute}
        />

        <CustomButton

          title='Signup'
          handleNavigation={() => navigation.navigate(navigationStrings.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({})