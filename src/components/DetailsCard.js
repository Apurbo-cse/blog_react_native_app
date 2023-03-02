import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/theme";
import CustomHeader from "./CustomHeader";
import { useNavigation } from "@react-navigation/native";

const DetailsCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={{ backgroundColor: colors.Background }}>
        <CustomHeader backFunc={() => navigation.goBack()} />
        <ScrollView style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.desc}>Description</Text>
            <Text style={styles.description}>{item.description}</Text>

            <Image style={styles.image} 
              source={{
                uri: `${'http://192.168.0.208:81/api_native/public/uploads/' + item?.image}`,
              }}
                      height={200}
            />
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default DetailsCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Background,
    height: "100%",
  },


  card: {
    backgroundColor: colors.gray,
    marginVertical:10,
    margin:5,
    borderRadius:10
    
  },

  title: {
    color: colors.primary,
    padding:5,
    paddingHorizontal:10,
    paddingBottom:0,
    fontSize:16
  },
  desc:{
    color: colors.primary,
    borderBottomWidth:1,
    borderBottomColor: colors.gold,
    padding:5,
    paddingHorizontal:10,
    fontWeight:"bold",
    fontSize:16
  },
  description:{
    color: colors.primary,
    padding:5,
    paddingHorizontal:10,
  },
  image:{
    resizeMode: "cover",
    height:200,
  },
  price:{
    padding:5,
  }
 
});
