import {View, Text} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function ErrorMessage({message, visible}) {
  if (!visible || !message) return <View style={{height: hp(3)}}></View>;
  return (
    <View style={{height: hp(3)}}>
      <Text style={{color: 'red', fontSize: hp(1.7), marginLeft: wp(3)}}>
        {message}
      </Text>
    </View>
  );
}
