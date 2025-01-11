import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native";

import BaseUrl from "../../constant/BaseUrl";
import Step from "../../components/Step";
import Color from "../../constant/Color";
import MessageQueue from "react-native/Libraries/BatchedBridge/MessageQueue";

const BookingDetails = ({ route }) => {
  const { id } = route.params;
  const [data, setData] = useState();
  const [statusValue, setStatusValue] = useState(0);

  useLayoutEffect(() => {
    getDetails();
  }, []);

  const getStatusValue = (value) => {
    setStatusValue(value);
    console.log("status", statusValue);
  };

  const getDetails = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      booking_id: id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(BaseUrl + "/booking/get", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status == 200) {
          setData(result.data);
          if (result.data.status == 4) {
            setStatusValue(true);
          }
        }
      })
      .catch((error) => console.log("error", error));
  };

  const handleCancell = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      booking_id: id,
      role_id: 2,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(BaseUrl + "/booking/cancel_booking", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status == 200) {
          alert("Order Cancelled");
          getDetails();
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Order Details</Text>
        </View>

        <View style={styles.content}>
          {/* <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>Booking ID:</Text>
          <Text style={styles.itemValue}>{data?.id}</Text>
        </View> */}
          <View style={styles.row}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle}>Ordered Time</Text>
              <Text style={styles.itemValue}>
                {data?.scheduled_date + " " + data?.scheduled_time}
              </Text>
            </View>

            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle}>Customer</Text>

              <Text style={styles.itemValue}>{data?.customer_name || " "}</Text>

              <Text style={styles.itemValue}>
                {data?.customer_contact_number}
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle}>Status</Text>
              <Text style={styles.itemValue}>{data?.location}</Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle}>Location</Text>
              <Text style={styles.itemValue}>{data?.location}</Text>
            </View>
          </View>

          {data?.status > 0 &&   <Step onStatusChange={getStatusValue} status={data?.status} id={id} /> }

        
        </View>

        <View style={[styles.content, { marginTop: 20 }]}>
          <View style={styles.row}>
            <View
              style={[
                styles.itemContainer,
                { flex: 0.5, backgroundColor: "gray" },
              ]}>
              <Image
                source={{
                  uri:
                    data?.category_img ||
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
                }}
                style={{
                  width: "100%",
                  alignSelf: "center",
                  minHeight: 100,
                  maxHeight: 120,
                }}
              />
            </View>
            <View style={[styles.itemContainer, { alignItems: "flex-start" }]}>
              <Text
                style={[
                  styles.itemTitle,
                  {
                    fontSize: 20,
                    marginLeft: 10,

                    textAlign: "left",
                  },
                ]}>
                {data?.category}
              </Text>
              <Text style={styles.subTitle}>{data?.service}</Text>
              <Text style={styles.subTitle}>{"₹ " + data?.service_rate}</Text>
            </View>
          </View>
        </View>
        
        <View
          style={[
            {
              marginTop: 20,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}>
          {data?.status < 0 && (
            <View>
              <View style={[styles.row, { justifyContent: "flex-start" }]}>
                {/* <Icon name="cross" size={20} color={"red"} /> */}
                <Text style={[styles.itemTitle,{color:'red'}]}>Order Cancelled</Text>
              </View>
            </View>
          )}
          {statusValue ? (
            <View>
              <View style={[styles.row, { justifyContent: "flex-start" }]}>
                <Icon name="checkmark-circle-sharp" size={20} color={"green"} />
                <Text style={styles.itemTitle}>Job Completed</Text>
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: Color.primary,
                  marginTop: 10,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 10,
                }}
                onPress={() => {
                  Linking.canOpenURL(data?.invoice_pdf).then((supported) => {
                    if (supported) {
                      Linking.openURL(data?.invoice_pdf);
                    } else {
                      console.log(
                        "Don't know how to open URI: " + data?.invoice_pdf
                      );
                    }
                  });
                }}>
                <Text style={{ color: "white", textAlign: "center" }}>
                  Download Invoice
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            data?.status > 0 && (
              <TouchableOpacity
                style={{
                  backgroundColor: Color.primary,
                  marginTop: 10,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 10,
                }}
                onPress={handleCancell}>
                <Text style={{ color: "white", textAlign: "center" }}>
                  Canell Order
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default BookingDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    alignSelf: "stretch",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    elevation: 5,
    minHeight: 110,
  },
  itemContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginVertical: 10,
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    color: "black",
    width: "40%",
    fontWeight: "bold",
    textAlign: "center",
  },
  itemValue: {
    fontSize: 16,
    textAlign: "center",
    color: "#0B7FFF",
    width: "60%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  subTitle: {
    color: "black",
    marginLeft: 10,
    alignSelf: "flex-start",
    marginTop: 10,
  },
});


