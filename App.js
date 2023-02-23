import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterUser from './screens/RegisterUserScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ConfirmPassword from './screens/ConfirmPasswordScreen';

const Stack = createStackNavigator();

const App = () => {

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{
            title: "Login",
            headerShown: false,
          }} name="LoginScreen" component={LoginScreen} />
          <Stack.Screen options={{
            title: "Home",
            headerShown: false,
          }} name="HomeScreen" component={HomeScreen} />
          <Stack.Screen options={{
            title: "Register",
            headerShown: false,
          }} name="RegisterUser" component={RegisterUser} />
          <Stack.Screen options={{
            title: "ForgotScreen",
            headerShown: false,
          }} name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
          <Stack.Screen options={{
            title: "ConfirmPassword",
            headerShown: false,
          }} name="ConfirmPassword" component={ConfirmPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

export default App;