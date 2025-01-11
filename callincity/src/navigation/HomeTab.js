import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Booking from '../screens/Booking';
import Account from '../screens/Account';
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import Color from '../constant/Color';
import AccountStack from './AccountStack';
import HomeStack from './HomeStack';
import BookingStack from './BookingStack';
import AuthContext from '../store/authContext';



const Tab = createBottomTabNavigator();

export default function HomeTab() {


  React.useEffect(() => {
    
  }, [])
  


  return (
   
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarLabelStyle:{fontSize:12},
        tabBarActiveTintColor:Color.primary,
        tabBarInactiveTintColor: Color.secondary,
        tabBarStyle:{borderTopColor:Color.primary,
        
        borderTopWidth: 2}
      }} >
        <Tab.Screen name="homeStack" component={HomeStack} options={{
      tabBarIcon: ({focused}) => <FontAwesome name='home' size={25} color={focused ? Color.primary : Color.secondary}/>,
      tabBarLabel: 'Home'
    }}/>
        <Tab.Screen name="BookingStack" component={BookingStack} options={{
        headerShown: false,
        title: 'Booking',
        tabBarIcon: ({ focused }) => <FontAwesome name='shopping-cart' size={25}  color={focused ? Color.primary : Color.secondary} />, 
        headerStyle:{backgroundColor:Color.primary},
        headerTintColor: '#fff'
    }
    } />
        <Tab.Screen name="AccountStack" component={AccountStack}
        options={
        {tabBarIcon: ({ focused }) =>
         <FontAwesome name='user' 
         size={25} 
         color={focused ? Color.primary : Color.secondary}
         />,
         
         tabBarLabel: 'Account',
         
        }
       
        } 

        />
      </Tab.Navigator>
    
  );
}

