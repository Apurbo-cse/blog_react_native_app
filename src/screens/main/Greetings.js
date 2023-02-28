import { StyleSheet, SafeAreaView, ScrollView, View, Text } from "react-native";
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { colors } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../../components/CustomHeader";


const Greetings = () => {
  const Navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <CustomHeader backFunc={() => Navigation.goBack()} tns />
      {/* <TopMenuHeader image={imagePath.iconLiveChat} title={'Live Chat'} /> */}
        <Animatable.View animation="slideInUp" style={styles.animation}>
          <View style={styles.animation_view}>
            <Text style={styles.title}>Greetings</Text>
          </View>
        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Greetings;

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    marginBottom: -100,
    overflow: 'scroll',
    backgroundColor: colors.Background,
  },
  animation: {
    backgroundColor: colors.Background,
    height: 600,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    top: -120,
  },
  animation_view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    top: 10,
    paddingTop: 15,
  },
  title: {
    color: colors.whiteText,
    fontSize: 15,
    marginBottom: 20,
    fontWeight: '500',
  },
});

