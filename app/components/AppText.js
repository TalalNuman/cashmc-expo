import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function AppText({
  children,
  size = 5,
  fontWeight = '400',
  style,
}) {
  return (
    <View>
      <Text
        style={[
          {
            fontSize: hp(size),
            fontWeight: fontWeight,
          },

          style,
        ]}>
        {children}
      </Text>
    </View>
  );
}
