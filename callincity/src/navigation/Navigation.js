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
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;


