import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import Account from '../screens/Account';
import Profile from '../screens/account/Profile';
import Color from '../constant/Color';

const Stack = createNativeStackNavigator();


const AccountStack = () =>{
  return (
    
    <Stack.Navigator screenOptions={{
      headerStyle:{backgroundColor:Color.primary},
      headerTintColor: '#fff',
    }}>
        <Stack.Screen name="account" component={Account} options={{ title: 'Account'}} />
        <Stack.Screen name="profile" component={Profile} option={{title: 'Profile'}}/>
      </Stack.Navigator>

  )
}

export default AccountStack;