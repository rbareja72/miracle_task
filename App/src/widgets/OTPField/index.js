import React, { useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import normalize, { moderateScale, verticalScale, normalScale } from './../../config/device/normalize';

const OTPField = ({ length, value, onChange }) => {
  const refs = new Array(length).fill(useRef(null));

  const onKeyPress = () => {

  };

  const onChangeText = (value, ref, index) => {
    let otp = '';
    refs.forEach((ref) => {
      console.log(ref);
      otp += ref.value;
    });
    onChange(otp);
  };

  return (
    <View style={styles.row}>
      {
        refs.map((ref, index) => {
          return (
            <TextInput
              key={'' + index}
              ref={ref}
              style={styles.textInput}
              maxLength={1}
              value={value[index]}
              onKeyPress={(event) => onKeyPress(event, ref, index)}
              onChangeText={(value) => onChangeText(value, ref, index)}
            />
          );
        })
      }
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  textInput: {
    borderColor: colors.grey,
    borderWidth: moderateScale(1),
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(4),
    textAlign: 'center',
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
});

export default OTPField;
