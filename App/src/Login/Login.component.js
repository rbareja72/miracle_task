import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, Platform, Alert } from 'react-native';
import CustomLayout from './../widgets/CustomLayout';
import { ic_login } from '../../assets/images/ic_login';
import styles from './Login.styles';
import en from '../../assets/strings/en';
import FloatingLabelTextField from '../widgets/FloatingLabelTextField';
import Button from '../widgets/Button';
import Link from '../widgets/Link';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from './ducks/Login.actions';
import { validateEmail, validatePassword } from '../utils/helperFunctions';
import { Spinner } from '../widgets/Spinner';

const Login = (props) => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const {
    email,
    password,
    loading,
    loginApiState,
  } = props.loginState;
  const onLoginPress = () => {
    const isEmailCorrect = validateEmail(email.value);
    const isPasswordValid = validatePassword(password.value);
    const { login, loginSetError } = props.actions;
    if (isEmailCorrect && isPasswordValid) {
      login(email.value, password.value);
    }
    if (!isPasswordValid) {
      loginSetError('password', en.PASSWORD_MUST_BE_BETWEEN);
    }
    if (!isEmailCorrect) {
      loginSetError('email', en.INVALID_EMAIL);
    }
  };

  const onForgotPasswordPress = () => {
    props.navigation.navigate('ForgotPassword');
  };

  const {
    clearLoginApiState,
  } = props.actions;

  useEffect(() => {
    if (loginApiState.isSuccess || loginApiState.isError) {
      Alert.alert(loginApiState.message);
      clearLoginApiState();
    }
  }, [loginApiState, clearLoginApiState]);

  const onEmailChange = (value) => props.actions.updateLoginValue('email', value);
  const onPasswordChange = (value) => props.actions.updateLoginValue('password', value);
  const onEmailSubmit = () => passwordRef.current.focus();

  return (
    <CustomLayout
      image={ic_login}
      showBackButton={false}
    >
      <ScrollView style={styles.flexStyle} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>
        <View style={styles.container}>
          <View>
            <Text style={styles.titleStyle}>{en.LOGIN}</Text>
            <Text style={styles.paragraphStyle}>{en.PLEASE_LOGIN_TO_YOUR_ACCOUNT}</Text>
          </View>
          <View style={styles.formContainer}>
            <FloatingLabelTextField
              label={en.EMAIL_ADDRESS}
              onChangeText={onEmailChange}
              value={email.value}
              ref={emailRef}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
              onSubmitEditing={onEmailSubmit}
              error={email.error}
            />
            <FloatingLabelTextField
              label={en.PASSWORD}
              onChangeText={onPasswordChange}
              value={password.value}
              secureTextEntry={true}
              ref={passwordRef}
              autoCapitalize={'none'}
              onSubmitEditing={onLoginPress}
              error={password.error}
            />
          </View>
          <View style={styles.linkContainer}>
            <Link onPress={onForgotPasswordPress}>
              {en.FORGOT_PASSWORD}?
            </Link>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              label={en.LOGIN}
              onPress={onLoginPress}
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

const mapStateToProps = ({ LoginReducer }) => ({
  loginState: LoginReducer,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...loginActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
