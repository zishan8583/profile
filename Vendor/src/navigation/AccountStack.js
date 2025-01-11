import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../screens/Account';
import Color from '../constant/Color';

const Stack = createNativeStackNavigator();


const AccountStack = () =>{
  return (
    
    <Stack.Navigator screenOptions={{
      headerStyle:{backgroundColor:Color.primary},
      headerTintColor: '#fff',
    }}>
        <Stack.Screen name="account" component={Account} options={{ title: 'Account'}} />
    </Stack.Navigator>

  )
}

export default AccountStack;