import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../../constants/theme";
import CustomHeader from "../../components/CustomHeader";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import CardView from "../../components/CardView";
const GreetingsAll = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get("http://192.168.0.208:81/api_native/public/api/greetings")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.Background }}>
      <CustomHeader title="Post" backFunc={() => navigation.goBack()} />
      <ScrollView style={styles.container}>
        <View animation="slideInUp" style={styles.animation}>

          <View style={styles.animation_view}>
            {data.map((item, index) => {
              return <CardView key={index} item={item} />;
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GreetingsAll;

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    marginBottom: -100,
    overflow: "scroll",
    backgroundColor: colors.Background,
  },
});
