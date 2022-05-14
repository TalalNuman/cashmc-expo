import {View, Text, Image, TouchableOpacity} from 'react-native';

import React from 'react';
import Colors from '../constants/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function Header() {
  return (
    <View
      style={{
        height: hp(100),
        backgroundColor: Colors.primary,
      }}>
      <Image
        style={{
          position: 'absolute',
          top: -hp(4.5),
          left: -wp(8),
        }}
        source={require('../assets/icons/gold.png')}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: wp(7),
        }}>
        <View></View>

        <Image
          style={{width: 70, height: 70, marginLeft: wp(6)}}
          source={require('../assets/icons/logo.png')}
        />
        <TouchableOpacity>
          <Image
            style={{width: 25, height: 25}}
            source={require('../assets/icons/list.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
