import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from './../../Login';
import { OTPScreen } from './../../OTPScreen';

const Stack = createStackNavigator();

const Routes = () => {

  const header = () => {};

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OTPScreen" component={OTPScreen} options={{ header }} />
        <Stack.Screen name="Login" component={Login} options={{ header }} />
        {/* <Stack.Screen name="ForgetPassoword" component={LoginScreen} />
        <Stack.Screen name="NewPassword" component={LoginScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
