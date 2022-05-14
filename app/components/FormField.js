import React from 'react';
import {StyleSheet, View, Image, TextInput} from 'react-native';
import {useFormikContext} from 'formik';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ErrorMessage from './ErrorMessage';

import Colors from '../constants/Colors';
export default function AppFormField({placeholder, name, ...otherProps}) {
  const {handleChange, setFieldTouched, errors, touched} = useFormikContext();
  return (
    <View style={styles.InputContainer}>
      <View
        style={{
          backgroundColor: '#4A2C2B',
          flexDirection: 'row',
          width: wp(85),
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: hp(7),
          borderRadius: 10,
        }}>
        <Image
          style={{marginRight: wp(3), marginLeft: wp(6)}}
          source={require('../assets/icons/box-arrow-in-le.png')}
        />
        <TextInput
          style={{color: Colors.sec, flex: 1, fontSize: hp(2.2)}}
          placeholderTextColor={Colors.sec}
          placeholder={placeholder}
          onChangeText={handleChange(name)}
          onBlur={() => setFieldTouched(name)}
        />
      </View>
      <ErrorMessage message={errors[name]} visible={touched[name]} />
    </View>
  );
}
const styles = StyleSheet.create({
  InputContainer: {
    marginTop: 5,
    paddingHorizontal: 20,
  },
});
