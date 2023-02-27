import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import TextInputField from '../../components/TextInputField'
import CustomButton from '../../components/CustomButton'
import navigationStrings from '../../navigations/navigationStrings'
import validator from '../../utils/validation';
import { showError, showMessage } from '../../utils/helperFunc'
import actions from '../../redux/actions'

const SignUpScreen = ({ navigation }) => {
  const [state, setstate] = useState({
    isLoading: false,
    first_name:'',
    email: '',
    password: '',
    phone:"",
    isSecure: true
  });
  const { email, isLoading, password, isSecure ,first_name,phone} = state;
  const isVaildData = () => {
    const error = validator({
      first_name,
      email,
      phone,
      password,
    
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
      setstate({...state,isLoading:true})
      try {
       const res=await actions.signup({
        first_name,
        email,
        phone,
        password
       })
        // console.log('signup res data==> ', res)
        setstate({...state,isLoading:false})
        showMessage('Please verfify your mail and password')
        navigation.goBack()
      } catch (error) {
        console.log(error);
        showError(error.message)
        setstate({...state,isLoading:false})
      }


      // navigation.navigate(navigationStrings.SIGNUP);
    }


  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
      <TextInputField
          label={'User Name'}
          placeholder='Enter your User Name'

          onChangeText={(e) => setstate({ ...state, first_name: e })}

        />
        <TextInputField
          label={'Email'}
          placeholder='Enter your Email'

          onChangeText={(e) => setstate({ ...state, email: e })}

        />
          <TextInputField
          label={'Phone'}
          placeholder='Enter your Phone no'

          onChangeText={(e) => setstate({ ...state, phone: e })}

        />
        <TextInputField
          label={'Password'}
          placeholder='Enter your Password'
          secureTextEntry={isSecure}
          onChangeText={(e) => setstate({ ...state, password: e })}
        />

        <CustomButton
        isLoading={isLoading}
          title='Signup'
          handleNavigation={handleRoute}
        />
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen;

const styles = StyleSheet.create({})