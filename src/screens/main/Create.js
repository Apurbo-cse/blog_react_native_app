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
    });
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
});
