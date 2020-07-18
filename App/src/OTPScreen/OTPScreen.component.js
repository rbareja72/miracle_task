import React, { useState } from 'react';
import { View, Text, ScrollView, Platform } from 'react-native';
import CustomLayout from '../widgets/CustomLayout';
import { ic_otp } from '../../assets/images/ic_otp';
import styles from './OTPScreen.styles';
import OTPField from '../widgets/OTPField';
import Button from '../widgets/Button';
import Link from '../widgets/Link';
import en from './../../assets/strings/en';
import KeyboardSpacer from 'react-native-keyboard-spacer';

const OTPScreen = (props) => {

  const [otp, setOtp] = useState('');

  const onBackPress = () => {
    props.navigation.goBack();
  };

  const onNeedHelpPress = () => null;

  const onChange = (value) => {
    setOtp(value);
  };

  const onSubmitPress = () => {
    props.navigation.replace('ResetPassword');
  };

  return (
    <CustomLayout
      image={ic_otp}
      onBackPress={onBackPress}
    >
      <ScrollView style={styles.flexStyle} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            <Text style={styles.titleStyle}>{en.VERIFICATION}</Text>
            <View style={styles.row}>
              <Text style={styles.paragraphStyle}>{en.A_VERIFICATION_CODE_SENT_TO}{' '}</Text>
              <Text style={styles.emailText}>{'email'}</Text>
            </View>
          </View>
          <View style={styles.formContainer}>
            <OTPField length={5} onChange={onChange} value={otp} />
          </View>
          <View style={[styles.resendLinkContainer, styles.row]}>
            <Text style={styles.subHeading}>{en.DONT_RECEIVED_THE_CODE}?</Text>
            <Link onPress={onNeedHelpPress} linkStyle={styles.resendLink}>(32){en.RESEND}</Link>
          </View>
          <View style={styles.buttonContainer}>
            <Link onPress={onNeedHelpPress} linkStyle={styles.link}>{en.NEED_HELP}?</Link>
            <Button
              label={en.VERIFY}
              onPress={onSubmitPress}
              buttonStyle={styles.buttonStyle}
            />
          </View>
        </View>
      </ScrollView>
      {Platform.OS === 'ios' ? <KeyboardSpacer topSpacing={-40} /> : null}
    </CustomLayout>
  );
};

export default OTPScreen;
