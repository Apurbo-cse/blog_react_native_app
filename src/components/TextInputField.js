import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native'
import React from 'react'


const TextInputField = (
  {
    label,
    placeholder,
    isSecure,
    onChangeText,
    ...props

  }

) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}

        {...props}
      />
    </SafeAreaView>
  )
}

export default TextInputField

const styles = StyleSheet.create({
  container: {

    marginHorizontal: 24,
    
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,


  },
  labelStyle:{fontWeight:'bold',fontSize:15,marginVertical:10}
})