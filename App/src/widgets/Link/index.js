import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import normalize from '../../config/device/normalize';

const Link = ({ children, onPress, linkStyle, disabled = false }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed ? { opacity: 0.5 } : null} disabled={disabled}>
      <View>
        <Text style={[styles.buttonText, linkStyle, disabled ? styles.disabledStyle : null]}>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: normalize(12),
    color: colors.orange,
  },
  disabledStyle: {
    opacity: 0.5,
  },
});

export default Link;
