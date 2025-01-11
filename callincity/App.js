// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { notificationListner, requestUserPermission } from './src/pushNotification';
import { AuthContextProvider } from './src/store/authContext';
import CartProvider from './src/store/CartContext';




function App() {

  // React.useEffect(() => {
  //   requestUserPermission();
  //   notificationListner();
  // }, [])
  


  return (  
    
      <AuthContextProvider>
      <CartProvider>
         <Navigation/>  
      </CartProvider>
      </AuthContextProvider>
   

  );
}

export default App;