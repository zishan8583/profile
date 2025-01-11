import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../screens/Account';
import Color from '../constant/Color';
import CurrentBookings from '../screens/currentBooking/CurrentBookings';
import BookingDetails from '../screens/currentBooking/BookingDetails';
import RecentBookings from '../screens/currentBooking/RecentBookinigs';

const Stack = createNativeStackNavigator();


const BookingStack = () =>{
  return (
    
    <Stack.Navigator screenOptions={{
      headerStyle:{backgroundColor:Color.primary},
      headerTintColor: '#fff',
    }}>
        <Stack.Screen name="currentBooking" component={CurrentBookings} options={{title:'Current Bookings'}} />
        <Stack.Screen name="bookingDetails" component={BookingDetails} options={{ title: 'Booking Details'}} />
        <Stack.Screen name="recentBookings" component={RecentBookings}  options={{title:'Recent Bookings'}} />
    </Stack.Navigator>

  )
}

export default BookingStack;