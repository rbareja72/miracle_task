import React, { useRef, useEffect } from 'react';
import { View, Text, ScrollView, Platform, Alert } from 'react-native';
import CustomLayout from './../widgets/CustomLayout';
import { ic_forget } from '../../assets/images/ic_forget';
import styles from './ForgotPassword.styles';
import en from '../../assets/strings/en';
import FloatingLabelTextField from '../widgets/FloatingLabelTextField';
import Button from '../widgets/Button';
import Link from '../widgets/Link';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Spinner } from '../widgets/Spinner';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as forgotPasswordActions from './ducks/ForgotPassword.actions';
import { validateEmail } from './../utils/helperFunctions';

const ForgotPassword = (props) => {

  const emailRef = useRef(null);
  const onBackPress = () => props.navigation.navigate('Login');
  const onNeedHelpPress = () => null;
  const onEmailChange = (value) => props.actions.updateValue('email', value);

  const {
    email,
    loading,
    sendOTPApiState,
  } = props.forgotPasswordState;

  const onSubmitPress = () => {
    const isEmailValid = validateEmail(email.value);
    if (isEmailValid) {
      props.actions.sendOTP(email.value);
    } else {
      props.actions.setError('email', en.INVALID_EMAIL);
    }
  };

  const {
    clearSendOTPApiState,
  } = props.actions;

  useEffect(() => {
    if (sendOTPApiState.isSuccess) {
      clearSendOTPApiState();
      props.navigation.navigate('OTPScreen');
    } else if (sendOTPApiState.isError) {
      Alert.alert(sendOTPApiState.message);
      clearSendOTPApiState();
    }
  }, [sendOTPApiState, clearSendOTPApiState, props.navigation]);

  return (
    <CustomLayout
      image={ic_forget}
      onBackPress={onBackPress}
    >
      <ScrollView style={styles.flexStyle} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            <Text style={styles.titleStyle}>{en.ACCOUNT_HELP}!</Text>
            <Text style={styles.paragraphStyle}>{en.ACCOUNT_RECOVERY_OPTIONS}</Text>
          </View>
          <View style={styles.subHeadContainer}>
            <Text style={[styles.paragraphStyle, styles.subHeading]}>{en.ENTER_YOUR_EMAIL_ADDRESS}</Text>
          </View>
          <View style={styles.formContainer}>
            <FloatingLabelTextField
              label={en.EMAIL_ADDRESS}
              onChangeText={onEmailChange}
              value={email.value}
              ref={emailRef}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
              error={email.error}
              onSubmitEditing={onSubmitPress}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Link onPress={onNeedHelpPress} linkStyle={styles.link}>{en.NEED_HELP}?</Link>
            <Button
              label={en.SUBMIT}
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
