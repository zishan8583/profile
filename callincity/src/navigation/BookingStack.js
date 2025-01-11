import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Servicing from '../components/Servicing';
import ViewDetails from '../screens/ViewDetails';
import Cart from '../screens/Cart';
import Color from '../constant/Color';
import Location from '../screens/Location';
import Booking from '../screens/Booking';
import BookingDetails from '../screens/BookingDetails';
import RecentBookings from '../screens/RecentBookings';

const Stack = createNativeStackNavigator();


const BookingStack = () =>{
   
  return (
    
    <Stack.Navigator screenOptions={{
      headerStyle:{backgroundColor:Color.primary},
      headerTintColor: '#fff',
      
    }}>
        <Stack.Screen name="Booking" component={Booking} options={{headerShown:true}} />
        <Stack.Screen name="BookingDetails" component={BookingDetails}  options={{title:'Booking Details'}} />
        <Stack.Screen name="recentBookings" component={RecentBookings}  options={{title:'Recent Bookings'}} />
      
      </Stack.Navigator>

  )
}

export default BookingStack;