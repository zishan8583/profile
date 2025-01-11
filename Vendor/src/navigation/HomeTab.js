import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/MaterialIcons";
import Icone from "react-native-vector-icons/Entypo";
import Color from "../constant/Color";
import AccountStack from "./AccountStack";
import HomeStack from "./HomeStack";
import BookingStack from "./BookingStack";
import ProfileStack from "./ProfileStack";
import AuthContext from "../store/authContext";
import BaseUrl from "../constant/BaseUrl";
import Loader from "../components/Loader";
import { WalletContextProvider } from "../store/walletContext";

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarLabelStyle: { fontSize: 12 },
  tabBarActiveTintColor: Color.primary,
  tabBarInactiveTintColor: Color.secondary,
  tabBarStyle: {
    borderTopColor: Color.primary,

    borderTopWidth: 2,
  },
};

export default function HomeTab() {
const [loader, setLoader] = React.useState(false)
  const authctx = React.useContext(AuthContext);

  React.useEffect(() => {
    setLoader(true)

    if (parseInt(authctx.user.id)) {    
      getData();
    }

    setLoader(false)


  }, [authctx.user.id]);

  function getData() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      vendor_id: authctx.user.id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };


    fetch(BaseUrl + "/vendor/get", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status == 200) {
  
          authctx.updateStatus(parseInt(result.data.status));
        }
      })
      .catch((error) => console.log("error", error));
  }

  if (loader) {
    return <Loader/>
  }

  if (authctx.user?.status == 0) {
    return <ProfileStack />;
  } else {
    return (
      <WalletContextProvider>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="homeStack"
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="leaderboard"
                size={25}
                color={focused ? Color.primary : Color.secondary}
              />
            ),
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name="bookingStack"
          component={BookingStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icone
                name="shopping-cart"
                size={25}
                color={focused ? Color.primary : Color.secondary}
              />
            ),
            headerStyle: { backgroundColor: Color.primary },
            headerTintColor: "#fff",
            tabBarLabel: "Bookings",
          }}
        />
        <Tab.Screen
          name="profileStack"
          component={ProfileStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icone
                name="user"
                size={25}
                color={focused ? Color.primary : Color.secondary}
              />
            ),

            tabBarLabel: "Profile",
          }}
        />

        <Tab.Screen
          name="accountStack"
          component={AccountStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icone
                name="dots-three-horizontal"
                size={25}
                color={focused ? Color.primary : Color.secondary}
              />
            ),
            headerStyle: { backgroundColor: Color.primary },
            headerTintColor: "#fff",
            tabBarLabel: "Account",
          }}
        />
      </Tab.Navigator>
      </WalletContextProvider>
    );
  }
}

const onApprovel = () => {};
