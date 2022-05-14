import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function InputField({label, value}) {
  return (
    <View style={{paddingHorizontal: wp(5), marginVertical: hp(1)}}>
      <Text style={{color: Colors.white, fontSize: 17, fontWeight: '600'}}>
        {label}
      </Text>
      <View
        style={{
          marginTop: hp(0.8),
          backgroundColor: 'rgba(52, 52, 52, 0.8)',
          height: hp(5.5),
          borderRadius: 7,
          paddingHorizontal: wp(2),

          justifyContent: 'center',
        }}>
        <Text style={{color: Colors.gray}}>{value}</Text>
      </View>
    </View>
  );
}
