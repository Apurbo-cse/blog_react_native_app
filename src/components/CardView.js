import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import imagePath from "../constants/imagePath";
import { colors } from "../constants/theme";
import { Image } from "react-native";
import navigationStrings from "../navigations/navigationStrings";
import { useNavigation } from '@react-navigation/native';


const CardView = ({ item }) => {

  const navigation = useNavigation()
  
  return (
    <TouchableOpacity
      key={item.id}
      onPress={() => navigation.navigate(navigationStrings.DETAILS,{
        item: item,
      })}
    >
      <ImageBackground
        source={imagePath.cardBbTwo}
        resizeMode="cover"
        style={styles.card}
      >
        <View style={styles.iconContainer}>

          <Image
            source={{
              uri: `${'http://192.168.0.208:81/api_native/public/uploads/' + item?.image}`,
            }}

            style={styles.icon}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text2} numberOfLines={3} >{item.description}</Text>
        </View>

      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CardView;

const styles = StyleSheet.create({
  card: {
    height: 100,
    borderRadius: 10,
    marginTop: 15,
    overflow: "hidden",
    margin: 0,
    padding: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.transparentBlack,
    marginRight: 2,
  },

  icon: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  textContainer: {
    width: "70%",
    backgroundColor: colors.transparentBlack,
    paddingVertical: 5,
    padding: 15,
  },
  text: {
    fontSize: 18,
    fontFamily: "roboto",
    color: colors.whiteText,
  },
  text2: {
    fontSize: 15,
    fontFamily: "roboto",
    color: colors.blackText,
  },
});
