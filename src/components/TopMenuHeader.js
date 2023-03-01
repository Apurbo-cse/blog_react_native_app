import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import { colors } from '../constants/theme';
import imagePath from '../constants/imagePath';

const TopMenuHeader = ({image, title}) => {
  return (
    <ImageBackground
      source={imagePath.deshbordTob}
      resizeMode="cover"
      style={styles.topHader}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={image} style={{width: 100}} />
        </View>

        <View style={styles.info}>
          {/* <Text style={{ color: colors.whiteText, paddingHorizontal: 5, paddingVertical: 5 }}>{title}</Text> */}
          <View style={styles.TextContainer}>
            <View style={styles.icon}>
              <Image
                source={imagePath.iconRocket}
                style={{width: 15, height: 15}}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: colors.gold, fontSize: 12}}>159800</Text>
              <Text style={styles.text}>Total Earn</Text>
            </View>
          </View>

          <View style={styles.TextContainer}>
            <View style={styles.icon}>
              <Image
                source={imagePath.iconCalender}
                style={{width: 15, height: 15}}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: colors.gold, fontSize: 12}}>17</Text>
              <Text style={styles.text}>Total Events</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default TopMenuHeader;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    height: 120,
    width: '90%',
    top: -20,
    flexDirection: 'row',
    marginTop: 60,
  },
  imageContainer: {
    // backgroundColor: 'yellow',
    width: '50%',
  },

  TextContainer: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.Background,
    padding: 5,
    borderRadius: 100,
    borderColor: colors.gold,
    borderWidth: 1,
    flexDirection: 'column',
  },
  text: {
    color: colors.whiteText,
    fontSize: 8,
    fontWeight: '600',
  },
  topHader: {
    height: 300,
    width: '100%',
    margin: 0,
    padding: 0,
    // justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    overflow: 'hidden',
  },
  icon: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    paddingBottom: 4,
  },
  info: {
    width: '50%',
    padding: 5,
    justifyContent: 'space-around',
    borderRadius: 20,
    borderTopLeftRadius: 0,
    flexDirection: 'row',
  },
});
