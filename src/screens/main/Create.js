import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
} from "react-native";
import React, { useState } from "react";
import CustomHeader from "../../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import Video from "react-native-video";
import AppUrl from "../../restApi/AppUrl";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import New from "./New";

const Create = ({ route }) => {
  const navigation = useNavigation();

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [video, setVideo] = useState(null);

  const [bannerOrVideo, setBannerOrVideo] = React.useState("Banner");
  const [hasError, setHasError] = useState(null);
  const [fileShow, setFileShow] = React.useState(null);

  const onChooseVideo = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert("Upload Content", "Choose an option", [
        { text: "Camera", onPress: onCameraVideo },
        { text: "Gallery", onPress: choseVideo },
        { text: "Cancel", onPress: () => {} },
      ]);
    }
  };

  const choseVideo = async () => {
    console.log("image com");

    let options = {
      title: "Video Picker",
      mediaType: "video",
      storageOptions: {
        skipBackup: true,
        path: "images",
        mediaType: "video",
        videoQuality: "medium",
      },
      includeBase64: true,
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
        alert(response.customButton);
      } else {
        RNFS.readFile(response.assets[0].uri, "base64").then((res) => {
          setVideo({
            uri: response.assets[0].uri,
            type: response.assets[0].type,
            name: response.assets[0].fileName,
            data: res,
            oldImage: "",
          });
        });
      }
    });
  };

  const onCameraVideo = async () => {
    let options = {
      title: "Video Picker",
      mediaType: "video",
      storageOptions: {
        skipBackup: true,
        path: "images",
        mediaType: "video",
        videoQuality: "medium",
      },
      includeBase64: true,
    };
    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
        alert(response.customButton);
      } else {
        RNFS.readFile(response.assets[0].uri, "base64").then((res) => {
          setVideo({
            uri: response.assets[0].uri,
            type: response.assets[0].type,
            name: response.assets[0].fileName,
            data: res,
            oldImage: "",
          });
        });
      }
    });
  };

  const handleConfirm = () => {
    if (!title || !description) {
      return setHasError(true);
    }
    console.log("try");
    const data = {
      title,
      description,
      video: video,
    };
    console.log(data);
    axios
      .post('http://192.168.0.208:81/api_native/public/api/')
      .then((res) => {
        Toast.show("done", Toast.durations.SHORT);
        navigation.goBack();
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log(data);
  };



  const [cameraPhoto, setCameraPhoto] = React.useState(null);
  const [galleryPhoto, setGalleryPhoto] = React.useState(null);

  let options = {
    saveToPhotos: true,
    mediaType: "photo",
  };

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setCameraPhoto(result.assets[0].uri);
    }
  };
  

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setGalleryPhoto(result.assets[0].uri);
    
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <CustomHeader title="Post" backFunc={() => navigation.goBack()} />


      <New/>

      <ScrollView style={styles.container}>
        <View>
          {/* <TouchableOpacity onPress={openCamera}>
            <Text style={{ color: "red", marginLeft: 10, marginTop: 5 }}>
              Image Upload
            </Text>
          </TouchableOpacity> */}

{/* 
          <TouchableOpacity onPress={openGallery}>
            <Text style={{ color: "red", marginLeft: 10, marginTop: 5 }}>
              Gallery Photo
            </Text>
          </TouchableOpacity>
          <Image source={{uri:cameraPhoto}} />
          <Image source={{uri:galleryPhoto}} />
          */}
          {/* <View
            style={{
              padding: 12,
              marginTop: 15,
              backgroundColor: "#181819",
              borderRadius: 20,
            }}
          >
            <View>
              <TextInput
                style={styles.createPostRow}
                placeholder="Post Title"
                placeholderTextColor={"#9e9e9e"}
                onChangeText={setTitle}
                value={title}
              />
              {hasError && !title && (
                <Text style={{ color: "red", marginLeft: 10, marginTop: 5 }}>
                  Title Required
                </Text>
              )}
            </View>

            <View>
              <TextInput
                style={styles.createPostDescription}
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

            <View style={{ width: "100%" }}>
              <Video
                // video={video.uri}
                videoWidth={140}
                videoHeight={100}
              />
            </View>

            <TouchableOpacity
              style={styles.uploadFileBtn}
              onPress={onChooseVideo}
            >
              {fileShow ? (
                <Text style={{ color: "#9e9e9e", paddingLeft: 8 }}>
                  {fileShow}
                </Text>
              ) : (
                <Text style={{ color: "#9e9e9e", paddingLeft: 8 }}>
                  Upload Video
                </Text>
              )}
            </TouchableOpacity>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.confirmBtn}
                onPress={handleConfirm}
              >
                <Text style={{ fontSize: 13, color: "white" }}>CONFIRM</Text>
              </TouchableOpacity>
            </View>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  createPostRow: {
    backgroundColor: "#121212",
    marginTop: 8,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 0.5,
    borderColor: "#ffad00",
    borderRadius: 20,
    padding: 10,
    color: "#fff",
  },
  createPostTitleDollar: {
    marginTop: 8,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#121212",
    alignItems: "center",
    color: "white",
    borderWidth: 0.5,
    borderColor: "#ffaa00",
    borderRadius: 20,
    padding: 10,
  },
  createPostDescription: {
    marginTop: 8,
    marginBottom: 8,
    flexDirection: "row",
    color: "white",
    borderWidth: 0.5,
    borderColor: "#ffaa00",
    borderRadius: 20,
    backgroundColor: "#121212",
    padding: 10,
    minHeight: 80,
  },
  uploadFile: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  uploadFileBtn: {
    // width: "47%",
    marginTop: 8,
    marginBottom: 8,
    flexDirection: "row",
    color: "white",
    borderWidth: 0.5,
    backgroundColor: "#121212",
    borderColor: "#ffaa00",
    borderRadius: 20,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  removeBtn: {
    backgroundColor: "#2A2B2E",
    borderRadius: 20,
    width: "47%",
    height: 40,
    marginTop: 30,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  confirmBtn: {
    width: "47%",
    backgroundColor: "#1D90F4",
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  freeBtn: {
    width: "47%",
    height: 40,
    marginTop: 8,
    marginBottom: 8,
    borderColor: "#ffaa00",
    borderWidth: 0.5,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  freeBtnActive: {
    width: "47%",
    height: 40,
    marginTop: 8,
    marginBottom: 8,
    borderColor: "#ffad00",
    backgroundColor: "#2A2B2E",
    color: "#ddd",
    borderWidth: 0.5,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
