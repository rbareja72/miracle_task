import React from 'react';
import { View, Text } from 'react-native';
import CustomLayout from '../widgets/CustomLayout';
import { ic_otp } from '../../assets/images/ic_otp';
import styles from './OTPScreen.styles';
import OTPField from '../widgets/OTPField';

const OTPScreen = () => {

  const onBackPress = () => {

  };

  const onChange = (value) => {
    console.log('OTP', value);
  };

  return (
    <CustomLayout
      image={ic_otp}
      onBackPress={onBackPress}
    >
      <View style={styles.flexStyle}>
        <OTPField length={5} onChange={onChange} value={'12345'} />
      </View>
    </CustomLayout>
  );
};

export default OTPScreen;
