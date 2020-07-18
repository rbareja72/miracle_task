import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, Platform } from 'react-native';
import CustomLayout from './../widgets/CustomLayout';
import { ic_forget } from '../../assets/images/ic_forget';
import styles from './ForgotPassword.styles';
import en from '../../assets/strings/en';
import FloatingLabelTextField from '../widgets/FloatingLabelTextField';
import Button from '../widgets/Button';
import Link from '../widgets/Link';
import KeyboardSpacer from 'react-native-keyboard-spacer';

const ForgotPassword = (props) => {

  const emailRef = useRef(null);
  const [email, setEmail] = useState('name');
  const onSubmitPress = () => props.navigation.navigate('OTPScreen');
  const onBackPress = () => props.navigation.navigate('Login');
  const onNeedHelpPress = () => null;

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
              onChangeText={(value) => setEmail(value)}
              value={email}
              ref={emailRef}
              keyboardType={'email-address'}
              autoCapitalize={false}
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
      {Platform.OS === 'ios' ? <KeyboardSpacer topSpacing={-40} /> : null}
    </CustomLayout>
  );
};

export default ForgotPassword;
