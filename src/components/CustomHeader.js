import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import imagePath from '../constants/imagePath';
import { colors } from '../constants/theme';

const CustomHeader = ({backFunc, title, tns = null}) => {
  return (
    <View style={tns ? styles.transpare : styles.solid}>
      <View style={{width: '33%', justifyContent: 'center'}}>
        {backFunc ? (
          <TouchableOpacity
            onPress={backFunc}
            style={{marginLeft: 5, flexDirection: 'row'}}>
            <View style={{justifyContent: 'center'}}>
              {/* <Ionicons name="arrow-left" size={24} color={colors.Background} /> */}
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={{ fontSize: 16, color: 'white' }}>{"Back"}</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <View style={{height: 35, width: 35, marginLeft: 10}}>
              <Image
                source={imagePath.logo}
                style={{height: '100%', width: '100%'}}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  transpare: {
    flexDirection: 'row',
    height: 50,
    position: 'absolute',
    zIndex: 9,
    width: '100%',
  },
  solid: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    backgroundColor: colors.gold,
  },
});
