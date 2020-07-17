import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Router from './src/config/routes';
import store from './src/config/store';

const App = () => {
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
