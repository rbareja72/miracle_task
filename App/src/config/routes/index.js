import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from './../../Login';
import { OTPScreen } from './../../OTPScreen';
import { ForgotPassword } from '../../ForgotPassword';
import { ResetPassword } from '../../ResetPassword';

const Stack = createStackNavigator();

const Routes = () => {

  const header = () => { };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen name="Login" component={Login} options={{ header }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ header }} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} options={{ header }} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ header }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
