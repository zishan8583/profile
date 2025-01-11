import { View, Text } from 'react-native'
import React, { useContext } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import HomeTab from './HomeTab';
import AuthContext from '../store/authContext';

const Stack = createNativeStackNavigator();

const Navigation = () => {

  const authctx = useContext(AuthContext);

   


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerShown: false
      }}>
         { (!authctx.isLoggedIn) && <Stack.Screen name="AuthStack" component={AuthStack} /> }
         { (authctx.isLoggedIn) && <Stack.Screen name="HomeTab" component={HomeTab} /> }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;


