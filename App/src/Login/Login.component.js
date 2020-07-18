import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, Platform } from 'react-native';
import CustomLayout from './../widgets/CustomLayout';
import { ic_login } from '../../assets/images/ic_login';
import styles from './Login.styles';
import en from '../../assets/strings/en';
import FloatingLabelTextField from '../widgets/FloatingLabelTextField';
import Button from '../widgets/Button';
import Link from '../widgets/Link';
import KeyboardSpacer from 'react-native-keyboard-spacer';

const Login = (props) => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [email, setEmail] = useState('name');
  const onLoginPress = () => {

  };

  const onForgotPasswordPress = () => {
    props.navigation.navigate('OTPScreen');
  };

  return (
    <CustomLayout
      image={ic_login}
      showBackButton={false}
    >
      <ScrollView style={styles.flexStyle} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            <Text style={styles.titleStyle}>{en.LOGIN}</Text>
            <Text style={styles.paragraphStyle}>{en.PLEASE_LOGIN_TO_YOUR_ACCOUNT}</Text>
          </View>
          <View style={styles.formContainer}>
            <FloatingLabelTextField
              label={en.EMAIL_ADDRESS}
              onChangeText={(value) => setEmail(value)}
              value={email}
              ref={emailRef}
              keyboardType={'email-address'}
              autoCapitalize={false}
            />
            <FloatingLabelTextField
              label={en.PASSWORD}
              onChangeText={(value) => setEmail(value)}
              value={email}
              secureTextEntry={true}
              ref={passwordRef}
              autoCapitalize={false}
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
      {Platform.OS === 'ios' ? <KeyboardSpacer topSpacing={-40} /> : null}
    </CustomLayout>
  );
};

export default Login;
