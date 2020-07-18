import React, { useRef, useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import normalize, { moderateScale } from './../../config/device/normalize';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const OTPField = ({ length, value, onChange, textFieldStyle, containerStyle, keyboardType }) => {
  const refs = [];
  for (let i = 0; i < length; i++) {
    refs.push(useRef(null));
  }

  const [otp, setOtp] = useState(value);

  useEffect(() => {
    if (value !== otp) {
      setOtp(value);
    }
  }, [otp, value]);

  const onKeyPress = (event, ref, index) => {
    if (event.nativeEvent.key === 'Backspace') {
      if (index > 0) {
        refs[index - 1].current.focus();
      }
    } else {
      if (index < length - 1) {
        refs[index + 1].current.focus();
      }
    }
  };

  const onChangeText = (value, ref, index) => {
    const left = otp.substr(0, index);
    const right = otp.substr(index + 1);
    const newOtp = left + value + right;
    setOtp(newOtp);
    onChange(newOtp);
  };

  const onFieldPress = () => {
    if (otp.length === length) {
      refs[otp.length - 1].current.focus();
    } else {
      refs[otp.length].current.focus();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={onFieldPress}>
      <View style={[styles.row, containerStyle]}>
        {
          refs.map((ref, index) => {
            return (
              <TextInput
                key={'' + index}
                ref={ref}
                style={[styles.textInput, textFieldStyle]}
                maxLength={1}
                value={otp[index]}
                onKeyPress={(event) => onKeyPress(event, ref, index)}
                onChangeText={(value) => onChangeText(value, ref, index)}
                onSubmitEditing={() => { }}
                keyboardType={keyboardType || 'number-pad'}
                pointerEvents={'none'}
              />
            );
          })
        }
      </View>
    </TouchableWithoutFeedback>
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
