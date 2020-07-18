import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Router from './src/config/routes';
import store from './src/config/store';
import { getData, storeData } from './src/utils/dataUtil';
import { DEFAULT_EMAIL, DEFAULT_PASSWORD, DEFAULT_OTP } from './src/config/constants';

const App = () => {

  useEffect(() => {
    setDefaultData();
  }, []);

  /**
   * this function checks if email & password exists,
   * if not then set default in the storage.
   */
  const setDefaultData =  async () => {
    const storedEmail = await getData('email');
    const storedPassword = await getData('password');
    if (!(storedEmail && storedPassword)) {
      storeData('email', DEFAULT_EMAIL);
      storeData('password', DEFAULT_PASSWORD);
      storeData('otp', DEFAULT_OTP);
    }
  };

  return (
    <View style={styles.flexStyle}>
      <Provider store={store}>
        <Router />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  flexStyle: {
    flex: 1,
  },
});

export default App;
