import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import normalize, { moderateScale } from '../../config/device/normalize';

const Link = ({ children, onPress, buttonStyle }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed ? { opacity: 0.5 } : null}>
      <View style={[styles.button, buttonStyle]}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
  },
  buttonText: {
    fontSize: normalize(12),
    color: colors.orange,
  },
});

export default Link;
