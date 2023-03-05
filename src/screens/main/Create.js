import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CustomHeader from "../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";

const Create = ({ route }) => {
  const navigation = useNavigation();

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
      })
    
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <CustomHeader title="Post" backFunc={() => navigation.goBack()} />

      <View style={styles.form}>
        
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


    form:{
        padding : 15,
        backgroundColor : "#e3e3e3",
    },
   
    txtClose:{
        fontSize:18,
        fontWeight : "bold",
        marginVertical : 10,
        textAlign : "right"
    },
    text_input:{
        padding :10,
        borderWidth :1,
        borderColor : "gray",
        borderRadius : 10,
        marginTop :10
    },
    header_container : {
        padding : 15,
        backgroundColor : "#eeeeee",
        flexDirection:"row",
        justifyContent : "space-between"
    },
    txt_main : {
        fontSize : 22,
        fontWeight : "bold"
    },
    item_course : {
        padding :15,
        borderBottomWidth: 1,
        borderBottomColor : "#e2e2e2",
        flexDirection : "row",
        justifyContent:"space-between"
    },
    txt_name : {
        fontSize : 18,
        marginTop : 5,
        fontWeight : "bold"
    },
    txt_item : {
        fontSize : 14,
        marginTop : 5
    },
    txt_enabled : {
        fontSize : 14,
        marginTop : 5,
        color:"green",
        fontWeight : "bold"
    },
    txt_disabled : {
        fontSize : 14,
        marginTop : 5,
        color:"green",
        fontWeight : "bold"
    },
    txt_del:{
        fontSize : 14,
        marginTop : 5,
        color:"red",
        fontWeight : "bold"
    },
    txt_edit:{
        fontSize : 14,
        marginTop : 5,
        color:"blue",
        fontWeight : "bold"
    },
    btnContainer : {
        display : 'flex',
        padding :15,
        backgroundColor : "#000",
        marginTop : 20,
        
    },
    btnNewContainer : {
        padding :10,
        backgroundColor : "#000",
    },
    textButton : {
        textAlign : "center",
        color : "#FFF"
    },
});
