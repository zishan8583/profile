import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Servicing from '../components/Servicing';
import ViewDetails from '../screens/ViewDetails';
import Cart from '../screens/Cart';
import Color from '../constant/Color';
import Location from '../screens/Location';

const Stack = createNativeStackNavigator();


const HomeStack = () =>{
   
  return (
    
    <Stack.Navigator screenOptions={{
      headerStyle:{backgroundColor:Color.primary},
      headerTintColor: '#fff',
    
    }}>
        <Stack.Screen name="home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="location" component={Location} options={{title:'Location'}} />
        <Stack.Screen name="servicing" component={Servicing} options={{title:'AC'}}/>
        <Stack.Screen name="viewDetails" component={ViewDetails} />
        <Stack.Screen name="cart" component={Cart}  options={{title:'Cart'}} />
      </Stack.Navigator>

  )
}

export default HomeStack;