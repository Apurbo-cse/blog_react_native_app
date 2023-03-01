import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import {useNavigation} from '@react-navigation/native';
  import imagePath from '../constants/imagePath';
  import { colors } from '../constants/theme';
  
  const OptionCard = ({icon, title, color, action, payload = null, cout = 0}) => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity onPress={() => navigation.navigate(action)}>
        <ImageBackground
          source={color != 'redis' ? imagePath.cardBbOne : imagePath.cardBbTwo}
          resizeMode="cover"
          style={styles.card}>
          <View style={styles.iconContainer}>
            <Image source={icon} style={styles.icon} resizeMode="contain" />
            {cout != 0 && (
              <View style={styles.batch}>
                <Text style={{color: '#fff', fontSize: 8}}>{cout}</Text>
              </View>
            )}
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  
  export default OptionCard;
  
  const styles = StyleSheet.create({
    card: {
      height: 50,
      width: 350,
      borderRadius: 10,
      marginTop: 15,
      overflow: 'hidden',
      margin: 0,
      padding: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    iconContainer: {
      width: '20%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.transparentBlack,
      marginRight: 2,
    },
    icon: {
      width: 30,
    },
    textContainer: {
      width: '80%',
      paddingRight: 100,
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: colors.transparentBlack,
      paddingLeft: 40,
    },
    text: {
      fontSize: 15,
      fontFamily: 'roboto',
      color: colors.whiteText,
    },
    batch: {
      height: 15,
      width: 15,
      backgroundColor: 'red',
      position: 'absolute',
      borderRadius: 50,
      top: 7,
      right: 13,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  