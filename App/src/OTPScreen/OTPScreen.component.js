import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CustomLayout from '../widgets/CustomLayout';
import { ic_otp } from '../../assets/images/ic_otp';
import styles from './OTPScreen.styles';
import OTPField from '../widgets/OTPField';

const OTPScreen = (props) => {

  const [otp, setOtp] = useState('');

  const onBackPress = () => {
    props.navigation.goBack();
  };

  const onChange = (value) => {
    setOtp(value);
  };

  return (
    <CustomLayout
      image={ic_otp}
      onBackPress={onBackPress}
    >
      <View style={styles.flexStyle}>
        <OTPField length={5} onChange={onChange} value={otp} />
      </View>
    </CustomLayout>
  );
};

export default OTPScreen;
