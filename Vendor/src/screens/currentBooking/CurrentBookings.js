import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState, useEffect, useLayoutEffect } from "react";
import JobCard from "../../components/JobCard";
import { FlatList, RefreshControl } from "react-native";
import AuthContext from "../../store/authContext";
import BaseUrl from "../../constant/BaseUrl";
import axios from "axios";

import Color from "../../constant/Color";
import  Icon  from "react-native-vector-icons/FontAwesome";
import WalletContext from "../../store/walletContext";

const CurrentBookings = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const authCtx = useContext(AuthContext);
  const walletCtx = useContext(WalletContext)

 

  useEffect(() => {
    getData();

  }, [walletCtx.amount]);



  const getData = async () => {
    
    var raw = JSON.stringify({
      vendor_id: authCtx.user.id,
    });

    try {
    
      const response = await axios.post(
        BaseUrl + "vendor/getCurrentJobs",
        JSON.parse(raw)
      );
      console.log("res", response.data);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    getData();
    setRefreshing(false);
  };

  return (
    <View contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>

        <FlatList
          contentContainerStyle={{ alignItems: "center" }}
          data={data}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={({ item, index }) => (
            <JobCard
              customer_name={item.customer_name}
              category={item.category}
              service={item.service}
              location={item.location}
              scheduled_time={item.scheduled_time}
              scheduled_date={item.scheduled_date}
              booking_id={item.id}
              onPress={() =>
                navigation.navigate("bookingDetails", { id: item.id })
              }
            />
          )}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("recentBookings")}
          style={[
            styles.row,
            {
              width: "80%",
              alignItems: "center",
              alignSelf: "center",
              backgroundColor: Color.primary,
              marginVertical: 20,
              borderRadius: 5,
              padding: 10,
            },
          ]}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            Recent Bookings
          </Text>
          <Icon name="chevron-right" color={"white"} size={18} />
        </TouchableOpacity>
        {/* <JobCard onPress={() => navigation.navigate('bookingDetails')} /> */}

        
      </View>
    </View>
  );
};

export default CurrentBookings;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
