import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Color from '../constant/Color';
import Profile from '../screens/profile/Profile';
import Form from '../screens/profile/Form';
import Icon from 'react-native-vector-icons/AntDesign';
import AuthContext from '../store/authContext';
import { useNavigation } from '@react-navigation/native';
import Loader from '../components/Loader';



const Stack = createNativeStackNavigator();


const ProfileStack = () =>{
  const [loader, setLoader] = React.useState(true);
  const navigation = useNavigation()
  
  const authctx = React.useContext(AuthContext)

  React.useEffect(() => {
    
    setTimeout(() => setLoader(false), 2000);
  
    
  }, [])

  if (loader) {
    return <Loader/>
  }
  


  
  return (
    
    <Stack.Navigator screenOptions={{
      headerStyle:{backgroundColor:Color.primary},
      headerTintColor: '#fff',
    }}>
        <Stack.Screen name="profile" component={Profile} 
        options={{ title:'Profile', headerRight: (props) => (
          
          <Icon name='logout' color={'white'} size={25} 
            onPress={()=> {authctx.logout()}}
          />
    
    ),}}

        />
        <Stack.Screen name="form" component={Form} options={{ title: 'Profile'}} />
    </Stack.Navigator>

  )
}

export default ProfileStack;