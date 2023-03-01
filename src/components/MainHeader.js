import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { colors } from '../constants/theme';
import imagePath from '../constants/imagePath';

const MainHeader = ({title}) => {
  const insets = useSafeAreaInsets();
  const userData = useSelector((state) => state.auth.userData);
  return (
    <ImageBackground
      source={imagePath.deshbordTob}
      resizeMode="cover"
      style={styles.topHader}>
      <View style={styles.container}>
        <View style={styles.userInfoContainer}>
          {/* profile image */}
          <View style={styles.profileImage}>
            <Image
              source={{
                uri: 'https://assets-prod.sumo.prod.webservices.mozgcp.net/static/default-FFA-avatar.2f8c2a0592bda1c5.png',
              }}
              style={styles.proImage}
            />
          </View>
          {/* user information */}
          <View style={styles.userInfo}>
            <Text style={styles.starName}>{userData.name}</Text>
            <Text style={{color: colors.whiteText}}>Super Star</Text>
            <View style={{flexDirection: 'row', paddingTop: 8}}>
              <TouchableOpacity>
                <Image
                  source={imagePath.iconSettingDashbord}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{paddingLeft: 5}}>
                <View style={styles.notificationCount}>
                  <Text style={{color: '#fff', fontSize: 9}}>10</Text>
                </View>
                <Image
                  source={imagePath.iconNotificationDashbord}
                  style={{width: 28, height: 28}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* blance */}
        <View style={styles.blance}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: colors.Background,
              width: '90%',
              height: 25,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={styles.amount}>100</Text>

            <ImageBackground
              source={imagePath.inconGoldCoin}
              style={styles.coin}>
              <Text style={styles.symbol}>$</Text>
            </ImageBackground>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    height: 100,
    width: '90%',
    top: -20,
    flexDirection: 'row',
  },
  userInfoContainer: {
    // backgroundColor: 'yellow',
    width: '70%',
    flexDirection: 'row',
  },
  profileImage: {
    // backgroundColor: 'blue',
    width: '30%',
  },
  userInfo: {
    // backgroundColor: 'red',
    width: '70%',
    paddingLeft: 5,
  },
  blance: {
    // backgroundColor: 'green',
    width: '30%',
    alignItems: 'center',
  },
  starName: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.Background,
  },
  notificationCount: {
    height: 15,
    width: 15,
    backgroundColor: 'red',
    position: 'absolute',
    right: 0,
    zIndex: 9,
    borderRadius: 10,
    top: -6,
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 0.5,
  },
  proImage: {
    backgroundColor: 'green',
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  coin: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amount: {
    color: colors.whiteText,
    fontSize: 15,
    fontWeight: '400',
    paddingRight: 5,
  },
  symbol: {
    color: colors.Background,
    fontWeight: '800',
    fontSize: 13,
  },
  topHader: {
    height: 300,
    width: '100%',
    margin: 0,
    padding: 0,
    backgroundColor: colors.Background,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    overflow: 'hidden',
  },
});

export default MainHeader;
