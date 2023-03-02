import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../constants/theme";
import MainHeader from "../../components/MainHeader";
import Card from "../../components/Card";
import imagePath from "../../constants/imagePath";
import navigationStrings from "../../navigations/navigationStrings";

const Home = () => {
  return (
    <ScrollView
      style={[
        styles.container,
        {
          flexDirection: "column",
          height: 200,
        },
      ]}
    >
      <MainHeader />

      <View style={{ height: 700, backgroundColor: colors.Background }}>
        <View style={styles.cardBody}>
          <Card
            action={navigationStrings.GREETINGS}
            icon={imagePath.iconGresstings}
            title={"Greetings"}
          />
           <Card
            action={navigationStrings.GREETINGS}
            icon={imagePath.iconGresstings}
            title={"Greetings"}
          />
          
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Background,
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    top: -100,
  },

});

export default Home;
