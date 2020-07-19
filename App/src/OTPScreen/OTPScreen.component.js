import React, { useEffect, useRef, useCallback } from 'react';
import { View, Text, ScrollView, Platform, Alert } from 'react-native';
import CustomLayout from '../widgets/CustomLayout';
import { ic_otp } from '../../assets/images/ic_otp';
import styles from './OTPScreen.styles';
import OTPField from '../widgets/OTPField';
import Button from '../widgets/Button';
import Link from '../widgets/Link';
import en from './../../assets/strings/en';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as forgotPasswordActions from '../ForgotPassword/ducks/ForgotPassword.actions';
import { Spinner } from '../widgets/Spinner';

const OTP_LENGTH = 5;

const OTPScreen = (props) => {
  const { otp, email, timer, loading, matchOtpApiState } = props.forgotPasswordState;
  const { clearMatchOTPState, updateValue } = props.actions;

  const onBackPress = () => {
    props.navigation.goBack();
  };

  const onNeedHelpPress = () => null;

  const onChange = (value) => updateValue('otp', value);

  const onSubmitPress = () => {
    if (otp.value.length === OTP_LENGTH) {
      props.actions.matchOtpAction(otp.value);
    } else {
      props.actions.setError('otp', en.PLEASE_ENTER_COMPLETE_OTP);
    }
  };

  const onResendPress = () => {
    props.actions.sendOTP(email.value);
  };

  useEffect(() => {
    if (matchOtpApiState.isSuccess) {
      clearMatchOTPState();
      props.navigation.navigate('ResetPassword');
    } else if (matchOtpApiState.isError) {
      clearMatchOTPState();
      Alert.alert(matchOtpApiState.message);
    }
  }, [matchOtpApiState, clearMatchOTPState, props.navigation]);


  /**
   * segment responsible for timer call back
   */
  // begins here.
  const reduceTimer = useCallback(() => {
    updateValue('timer', timer.value - 1);
  }, [timer.value, updateValue]);

  const timerFunction = useRef(reduceTimer);

  useEffect(() => {
    timerFunction.current = reduceTimer;
  }, [reduceTimer]);

  useEffect(() => {
    const interval = setInterval(timerFunction.current, 1000);
    return () => clearInterval(interval);
  }, []);
  // ends here.

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
              <Text style={styles.emailText}>{email.value}</Text>
            </View>
          </View>
          <View style={styles.formContainer}>
            <OTPField length={OTP_LENGTH} onChange={onChange} value={otp.value} error={otp.error} />
          </View>
          <View style={[styles.resendLinkContainer, styles.row]}>
            <Text style={styles.subHeading}>{en.DONT_RECEIVED_THE_CODE}?</Text>
            <Link onPress={onResendPress} linkStyle={styles.resendLink} disabled={timer.value > -1}>{timer.value > -1 ? `(${timer.value})` : '(0)'}{en.RESEND}</Link>
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
      {loading && <Spinner />}
      {Platform.OS === 'ios' ? <KeyboardSpacer topSpacing={-40} /> : null}
    </CustomLayout>
  );
};

const mapStateToProps = ({ ForgotPasswordReducer }) => ({
  forgotPasswordState: ForgotPasswordReducer,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...forgotPasswordActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(OTPScreen);
