import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import normalize, { moderateScale } from '../../config/device/normalize';

const Button = ({ label, onPress, buttonStyle }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed ? { opacity: 0.5 } : null}>
      <View style={[styles.button, buttonStyle]}>
        <Text style={styles.buttonText}>{label}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.orange,
    borderRadius: moderateScale(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: normalize(14),
    color: colors.white,
    fontWeight: '500',
  },
});

export default Button;
