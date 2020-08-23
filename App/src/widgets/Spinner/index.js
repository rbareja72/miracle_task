import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import colors from '../../../assets/colors';

/**
 * Componenet to display loader.
 */
const Spinner = ({ size = 'large', bgColor = 'rgba(0, 0, 0, 0.15)', spinnerColor = colors.orange, spinnerStyle, ...props }) => {
  return (
    <View style={[styles.spinnerStyle, spinnerStyle, { backgroundColor: bgColor }]} {...props}>
      <ActivityIndicator size={size} color={spinnerColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
  },
});

export { Spinner };
