import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
import React from "react";
import imagePath from '../constants/imagePath';
import { colors } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';


const Card = ({ icon, title, color, action, payload = null }) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={
        payload
          ? () => navigation.navigate(action, payload)
          : () => navigation.navigate(action)
      }
    >
      <ImageBackground
        source={color !== "redis" ? imagePath.cardBbOne : imagePath.cardBbTwo}
        resizeMode="cover"
        style={styles.card}
      >
        <View style={styles.iconContainer}>
          <Image source={icon} style={styles.icon} resizeMode="contain" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Card;
const styles = StyleSheet.create({
    card: {
      height: 120,
      width: 170,
      borderRadius: 10,
      marginTop: 20,
      overflow: 'hidden',
      margin: 0,
      padding: 0,
    },
    iconContainer: {
      width: '100%',
      height: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 10,
    },
    icon: {
      width: 160,
      height: '100%',
    },
    textContainer: {
      height: '20%',
      // backgroundColor: '#00000025',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: colors.whiteText,
      textAlign: 'center',
      fontWeight: '400',
    },
  });
  
