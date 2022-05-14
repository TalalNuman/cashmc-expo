import {View, Text, Image, StatusBar} from 'react-native';
import React, {useState} from 'react';
import Colors from '../constants/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Header from '../components/Header';
import InputField from '../components/InputField';

export default function InputScreen() {
  const [level, setLevel] = useState('lvl 69');
  const [blocks, setBlocks] = useState('lvl 69');
  const [balance, setBalance] = useState('30,200 PLN');
  const [online, setOnline] = useState('1504 godzin');
  const [ranga, setRanga] = useState('BOGACZ');
  return (
    <>
      <StatusBar backgroundColor={Colors.primary} />
      <Header />
      <View
        style={{
          backgroundColor: 'rgba(52, 52, 52, 0.8)',
          height: hp(85),
          marginTop: -hp(82),
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: wp(10),
          }}>
          <Text
            style={{
              fontSize: 22,
              color: Colors.white,
              fontWeight: '700',
              padding: wp(10),
            }}>
            Twój profil
          </Text>
          <Image source={require('../assets/icons/face.png')} />
        </View>
        <View
          style={{
            backgroundColor: Colors.dark,
            width: wp(80),
            height: hp(62),
            alignSelf: 'center',
            justifyContent: 'center',
            borderRadius: 6,
          }}>
          <View>
            <InputField label={'Poziom kopania'} value={level} />
            <InputField label={'Wykopane bloki'} value={blocks} />
            <InputField label={'Stan konta'} value={balance} />
            <InputField label={'Łącznie online'} value={online} />
            <InputField label={'Ranga'} value={ranga} />
          </View>
        </View>
      </View>
    </>
  );
}
