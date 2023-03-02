import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../../constants/theme";
import axios from "axios";
import { useFormik } from "formik";

const New = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [description, setDescription] = useState(null);

  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    fetch("http://192.168.0.208:81/api_native/public/api/greetings")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  const handleConfirm = () => {

    console.log('fhskjfh')
    if (!name || !email || !description) {
      return setHasError(true);
    }
    const data = {
      name,
      description,
      email,
    };

    axios
      .post("http://192.168.0.208:81/api_native/public/api/store", data,{
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          // Authorization: `Bearer ${userToken}`,
          enctype: 'multipart/form-data',
        },
      })
      .then(function (response) {
        console.log(response);
        console.log('data==========>', data)
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  const formik = useFormik({
    initialValues: { title: '' },
    onSubmit: values => {
      RNFetchBlob.fetch('POST', `<domain-name>/api/imageadd`, {
        
        'Content-Type' : 'multipart/form-data',
      }, 
  [
    { 
       name : 'image', 
       filename : fileUri, 
       type:'image/jpeg', 
       data:    RNFetchBlob.wrap(fileContent)
    },
    { 
       name : 'title', 
       data : values.title
    },
        
      ]).then((resp) => {
        // ...
      }).catch((err) => {
        Alert.alert('An error occurred!', err.message, [{ text: 'Okay' }]);
      })
    }
  });

  return (
    <>
      <View>
        {data.map((item) => (
          <Text key={item.id} style={styles.Text}>
            {" "}
            Name : {item.name}
          </Text>
        ))}
      </View>

      <View>
        <TextInput
          style={styles.createPostRow}
          placeholder="Post name"
          placeholderTextColor={"#9e9e9e"}
          onChangeText={setName}
          value={name}
        />
        {hasError && !name && (
          <Text style={{ color: "red", marginLeft: 10, marginTop: 5 }}>
            name Required
          </Text>
        )}
      </View>

      <View>
        <TextInput
          style={styles.createPostRow}
          placeholder="Post email"
          placeholderTextColor={"#9e9e9e"}
          onChangeText={setEmail}
          value={email}
        />
        {hasError && !email && (
          <Text style={{ color: "red", marginLeft: 10, marginTop: 5 }}>
            name Required
          </Text>
        )}
      </View>

      <View>
        <TextInput
          style={styles.createPostRow}
          multiline={true}
          placeholder="Post Description"
          placeholderTextColor={"#9e9e9e"}
          onChangeText={setDescription}
          value={description}
        />
        {hasError && !description && (
          <Text style={{ color: "red", marginLeft: 10, marginTop: 5 }}>
            Description Required
          </Text>
        )}
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
          <Text style={{ fontSize: 13, color: "white" }}>CONFIRM</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default New;

const styles = StyleSheet.create({
  Text: {
    color: "white",
    backgroundColor: colors.Background,
    padding: 10,
    marginBottom: 10,
    marginTop:20,
  },
  createPostRow: {
    color: "white",
    borderColor: colors.goldLight,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
  },
  confirmBtn: {
    width: "47%",
    backgroundColor: "#1D90F4",
    borderRadius: 10,
    marginTop: 20,
    // marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
});
