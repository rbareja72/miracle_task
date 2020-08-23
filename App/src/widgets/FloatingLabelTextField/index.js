import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import { View, TextInput, Text, StyleSheet, Platform, UIManager, Animated, Easing } from 'react-native';
import normalize, { verticalScale } from '../../config/device/normalize';
import colors from '../../../assets/colors';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const FloatingLabelTextField = forwardRef(({ label, value, onChangeText, secureTextEntry, textFieldStyle, labelStyle, error, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedValue = new Animated.Value(value || isFocused ? 0 : 1);
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));

  const onFocus = () => {
    if (!value) {
      Animated.timing(animatedValue, {
        toValue: 0,
        easing: Easing.linear,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
    setIsFocused(true);
  };
  const onBlur = () => {
    if (!value) {
      Animated.timing(animatedValue, {
        toValue: 1,
        easing: Easing.ease,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
    setIsFocused(false);
  };

  const scale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.65, 1],
  });

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [
      -verticalScale(20),
      verticalScale(Platform.OS === 'android' ? -5 : 0),
    ],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[{ transform: [{ scale }, { translateY }], position: 'absolute', left: 0 }]}>
        <Text style={[styles.placeholderStyle, labelStyle]}>{label}</Text>
      </Animated.View>
      <TextInput
        ref={inputRef}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        style={[styles.textField, textFieldStyle, secureTextEntry ? styles.letterSpacing : null]}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        {...props}
      />
      {
        error
          ? <Text style={styles.errorText}>{error}</Text>
          : null
      }
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(8),
  },
  placeholderStyle: {
    position: 'absolute',
    fontSize: normalize(16),
    top: 18,
    alignSelf: 'flex-start',
    color: colors.textPlaceholderGrey,
  },
  textField: {
    borderBottomColor: colors.textFieldBorder,
    borderBottomWidth: verticalScale(1),
    height: verticalScale(21),
    marginTop: verticalScale(12),
    color: colors.textDarkGrey,
    padding: 0,
  },
  errorText: {
    color: colors.red,
  },
  buttonContainer: {
    marginTop: verticalScale(24),
  },
  letterSpacing: {
    letterSpacing: 8,
  },
});

export default FloatingLabelTextField;
