import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';

const Stack = createNativeStackNavigator();


const AuthStack = () =>{
  return (
    
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>

  )
}

export default AuthStack;