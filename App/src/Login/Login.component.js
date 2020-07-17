import React from 'react';
import { View, Text } from 'react-native';
import CustomLayout from './../widgets/CustomLayout';
import { ic_login } from '../../assets/images/ic_login';
import styles from './Login.styles';

const Login = () => {

  const onBackPress = () => {

  };

  return (
    <CustomLayout
      image={ic_login}
      onBackPress={onBackPress}
    >
      <View style={styles.flexStyle}>
        <Text>haha</Text>
      </View>
    </CustomLayout>
  );
};

export default Login;
