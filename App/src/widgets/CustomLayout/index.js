import React from 'react';
import { View, Image, ImageBackground, StyleSheet, Pressable, StatusBar, SafeAreaView } from 'react-native';
import { ic_back } from '../../../assets/images/ic_back';
import { moderateScale, verticalScale, normalScale } from './../../config/device/normalize';
import colors from '../../../assets/colors';

const CustomLayout = ({ image, showBackButton = true, onBackPress, children }) => {
  return (
    <View style={styles.flexStyle}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.transparent}
        translucent={true}
      />
      <ImageBackground source={image} style={styles.backgroundImage} resizeMode={'stretch'}>
        {
          showBackButton
            ? <View style={styles.buttonContainer}>
              <Pressable onPress={onBackPress} style={({ pressed }) => pressed ? styles.pressed : null}>
                <Image
                  source={ic_back}
                  resizeMode={'contain'}
                  style={styles.backIcon}
                />
              </Pressable>
            </View>
            : null
        }
      </ImageBackground>
      <SafeAreaView style={styles.container}>
        {children}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  flexStyle: {
    flex: 1,
  },
  backgroundImage: {
    flex: 4,
  },
  buttonContainer: {
    marginTop: verticalScale(24),
    marginStart: moderateScale(16),
  },
  backIcon: {
    width: normalScale(24),
    height: verticalScale(24),
  },
  container: {
    flex: 6,
    borderTopEndRadius: moderateScale(16),
    borderTopStartRadius: moderateScale(16),
    marginTop: -verticalScale(26),
    backgroundColor: colors.white,
    padding: moderateScale(4),
  },
  pressed: {
    opacity: 0.2,
  },
});

export default CustomLayout;
