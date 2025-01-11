import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home/Home';
import Color from '../constant/Color';
import Recents from '../screens/home/Recents';
import BookingDetails from '../screens/currentBooking/BookingDetails';

const Stack = createNativeStackNavigator();


const HomeStack = () => {

  return (
    
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: Color.primary },
      headerTintColor: '#fff',
      headerShown: false

    }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="recents" component={Recents} />
      <Stack.Screen name="BookingDetails" component={BookingDetails} />
    </Stack.Navigator>
    

  )
}

export default HomeStack;