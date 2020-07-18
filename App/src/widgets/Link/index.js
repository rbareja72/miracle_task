import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import normalize, { moderateScale } from '../../config/device/normalize';

const Link = ({ children, onPress, linkStyle }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed ? { opacity: 0.5 } : null}>
      <View>
        <Text style={[styles.buttonText, linkStyle]}>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: normalize(12),
    color: colors.orange,
  },
});

export default Link;
