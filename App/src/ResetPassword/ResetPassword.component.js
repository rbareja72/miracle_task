import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, Platform, Alert } from 'react-native';
import CustomLayout from './../widgets/CustomLayout';
import { ic_confirm } from '../../assets/images/ic_confirm';
import styles from './ResetPassword.styles';
import en from '../../assets/strings/en';
import FloatingLabelTextField from '../widgets/FloatingLabelTextField';
import Button from '../widgets/Button';
import Link from '../widgets/Link';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as forgotPasswordActions from '../ForgotPassword/ducks/ForgotPassword.actions';
import { Spinner } from '../widgets/Spinner';
import { validatePassword } from './../utils/helperFunctions';
const ResetPassword = (props) => {
  const {
    loading,
    newPassword,
    confirmPassword,
    updatePasswordApiState,
  } = props.forgotPasswordState;
  const {
    setError,
    clearState,
    updateValue,
    updatePasswordAction,
    clearResetPasswordState,
    clearSetNewPasswordState,
  } = props.actions;
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const onNeedHelpPress = () => null;
  const onNewPasswordChange = (value) => updateValue('newPassword', value);
  const onConfirmPasswordChange = (value) => updateValue('confirmPassword', value);
  const onNewPasswordSubmit = () => confirmPasswordRef.current.focus();

  const onBackPress = () => {
    props.navigation.goBack();
    clearResetPasswordState();
  };

  const onSubmitPress = () => {
    const isNewPasswordValid = validatePassword(newPassword.value);
    const isConfirmPasswordValid = validatePassword(confirmPassword.value);
    if (isNewPasswordValid && isConfirmPasswordValid && newPassword.value === confirmPassword.value) {
      updatePasswordAction(newPassword.value);
      return;
    }
    if (!isNewPasswordValid) {
      setError('newPassword', en.PASSWORD_MUST_BE_BETWEEN);
    } else {
      setError('confirmPassword', en.PASSWORDS_DO_NO_MATCH);
    }
  };

  useEffect(() => {
    if (updatePasswordApiState.isSuccess) {
      clearSetNewPasswordState();
      clearState();
      props.navigation.popToTop();
    } else if (updatePasswordApiState.isError) {
      Alert.alert(updatePasswordApiState.message);
      clearSetNewPasswordState();
    }
  }, [updatePasswordApiState, clearSetNewPasswordState, props.navigation, clearState]);

  return (
    <CustomLayout
      image={ic_confirm}
      onBackPress={onBackPress}
    >
      <ScrollView style={styles.flexStyle} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            <Text style={styles.titleStyle}>{en.ACCOUNT_HELP}!</Text>
            <Text style={styles.paragraphStyle}>{en.ACCOUNT_RECOVERY_OPTIONS}</Text>
          </View>
          <View style={styles.subHeadContainer}>
            <Text style={[styles.paragraphStyle, styles.subHeading]}>{en.ENTER_NEW_PASSWORD}</Text>
          </View>
          <View style={styles.formContainer}>
            <FloatingLabelTextField
              label={en.NEW_PASSWORD}
              onChangeText={onNewPasswordChange}
              value={newPassword.value}
              error={newPassword.error}
              secureTextEntry={true}
              ref={newPasswordRef}
              autoCapitalize={'none'}
              onSubmitEditing={onNewPasswordSubmit}
            />
            <FloatingLabelTextField
              label={en.CONFIRM_PASSWORD}
              onChangeText={onConfirmPasswordChange}
              value={confirmPassword.value}
              error={confirmPassword.error}
              secureTextEntry={true}
              ref={confirmPasswordRef}
              autoCapitalize={'none'}
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

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
