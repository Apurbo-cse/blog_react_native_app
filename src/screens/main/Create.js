import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import React, { useState } from "react";

import CustomHeader from "../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";
import RNDateTimePicker from '@react-native-community/datetimepicker';


const Create = ({ route }) => {
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date(1598051730000));
  // const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [text, setText] = useState('Epmty')

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    // setShow()

    setShow(false);
    setDate(currentDate);

    // setDate(currentDate);

    // let temDate = new Date(currentDate)
    // let fDate = temDate.getDate() + '-' + (temDate.getMonth() + 1) + '-' + temDate.getFullYear()
    // let fTime = temDate.getHours() + ':' + temDate.getMinutes()
    // setText(fDate + ' ' + fTime)
    // console.log('==============> ', fDate + ' ' + fTime)

  }

  // const showMode = (currentMode) => {
  //   setShow(true)
  //   setMode(currentMode)
  // }

  const showMode = (currentMode) => {
    // if (Platform.OS === 'android') {
    //   setShow(false);
     
    // }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    console.log('Clicked');
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  
  const [coureName, setCourseName] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [description, setDescriptoin] = useState("");


  
  const onChangeName = (value) => {
    setCourseName(value);
  };

  const onChangePrice = (value) => {
    setCoursePrice(value);
  };

  const onChangeDescriptoin = (value) => {
    setDescriptoin(value);
  };

  const handelSave = () => {
    var data = {
      name: coureName,
      price: Number(coursePrice) || 0,
      description: description,
    };

    axios({
      url: "http://192.168.0.208:81/api_native/public/api/store",
      method: "POST",
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <CustomHeader title="Post" backFunc={() => navigation.goBack()} />



      <View style={styles.form}>

        <Button title="Date" onPress={showDatepicker} />

        {show && (<DateTimePickerAndroid
        testId="dateTimePicker"
        value={date}
        mode={mode}
        is24Hour={true}
        // display="default"
        onChange={onChange}
        />)}
        <TextInput
          value={coureName}
          style={styles.text_input}
          placeholder="Course Name"
          onChangeText={onChangeName}
        />
        <TextInput
          value={coursePrice}
          style={styles.text_input}
          placeholder="Course price"
          onChangeText={onChangePrice}
        />
        <TextInput
          value={description}
          style={styles.text_input}
          placeholder="Description"
          onChangeText={onChangeDescriptoin}
        />


   


        <TouchableOpacity onPress={handelSave} style={styles.btnContainer}>
          <Text style={styles.textButton}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({
  form: {
    padding: 15,
    backgroundColor: "#e3e3e3",
  },

  text_input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    marginTop: 10,
  },

  btnContainer: {
    display: "flex",
    padding: 15,
    backgroundColor: "#000",
    marginTop: 20,
  },

  textButton: {
    textAlign: "center",
    color: "#FFF",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    alignContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
});
