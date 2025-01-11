import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import JobCard from "../../components/JobCard";
import AuthContext from "../../store/authContext";
import BaseUrl from "../../constant/BaseUrl";

const RecentBookings = ({ navigation }) => {
  const [data, setData] = useState();

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    getRecentBookings();
  }, []);

  function getRecentBookings() {
    
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "vendor_id": authCtx.user.id,
  "page_index": 1
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(BaseUrl+"vendor/jobHistory", requestOptions)
  .then(response => response.json())
  .then(result => {
    if (result.status == 200) {
        setData(result.data);
    }
  })
  .catch(error => console.log('error', error));


  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ width: "100%", alignItems: "center" }}>
        {data?.map((d, index) => (
            <JobCard
              key={index}
              customer_name={d.customer_name}
              category={d.category}
              service={d.service}
              location={d.location}
              scheduled_time={d.scheduled_time}
              scheduled_date={d.scheduled_date}
              booking_id={d.id}
              onPress={() =>
                navigation.navigate("bookingDetails", { id: d.id })
              }
            />
        ))}
      </View>

    </ScrollView>
  );
};

export default RecentBookings;

const styles = StyleSheet.create({});
