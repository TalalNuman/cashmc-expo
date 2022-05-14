import {View, Text} from 'react-native';
import React from 'react';

import Colors from '../constants/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppText from '../components/AppText';
export default function ServerCard({id, nickname, cash}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: Colors.dark,
        width: wp(90),
        height: hp(10),
        justifyContent: 'space-between',
        paddingHorizontal: wp(5),
        alignItems: 'center',
        borderRadius: 10,
        marginTop: hp(2),
        alignSelf: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <AppText size={3} style={{color: Colors.gray}}>
          {id}
        </AppText>

        <AppText size={2.5} style={{color: Colors.white, marginLeft: wp(7)}}>
          {nickname.length > 15 ? nickname.slice(0, 15) + '...' : nickname}
        </AppText>
      </View>

      <AppText size={2.4} style={{color: Colors.sec}}>
        {cash} PLN
      </AppText>
    </View>
  );
}
