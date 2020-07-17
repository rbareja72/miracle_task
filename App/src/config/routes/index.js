import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './../../Login';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="ForgetPassoword" component={LoginScreen} />
        <Stack.Screen name="OTPScreen" component={LoginScreen} />
        <Stack.Screen name="NewPassword" component={LoginScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
