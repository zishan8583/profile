import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import Color from "../constant/Color";
import AuthContext from "../store/authContext";
import BaseUrl from "../constant/BaseUrl";
import firestore from "@react-native-firebase/firestore";

const JobCard = ({
  button,
  onPress,
  customer_name,
  category,
  service,
  location,
  scheduled_time,
  scheduled_date,
  booking_id,
  doc_id,
}) => {
  const authCtx = useContext(AuthContext);

  const handleAction = (action) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      vendor_id: authCtx.user.id,
      booking_id,
      status: action,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(BaseUrl+"/vendor/acceptJob", requestOptions)
      .then((response) => response.json())
      .then((result) =>{
        if (result.status === 200) {
          alert("Booked Succesfully");
        }
      })
      .catch((error) =>  alert("Something went wrong"));
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.jobCard}>
      <Text style={styles.nameHeading}>{customer_name}</Text>
      <View
        style={[
          styles.row,
          {
            width: "100%",
            alignItems: "flex-start",
            justifyContent: "space-between",
          },
        ]}>
        <View style={[styles.name, { width: "70%" }]}>
          <Text style={styles.jobTitle}>{category}</Text>
          <Text style={styles.jobDescription}>{service}</Text>
        </View>
        <View style={[styles.time, { width: "27%" }]}>
          <Text style={{ color: "black" }}>{scheduled_time}</Text>
          <Text style={{ color: "black" }}>{scheduled_date}</Text>
        </View>
      </View>
      <View style={[styles.row, { marginTop: 20 }]}>
        <Icon name="map-marker" size={18} color={"black"} />
        <Text style={styles.address}>{location}</Text>
      </View>
      {button && (
        <View
          style={[
            styles.row,
            {
              width: "100%",
              justifyContent: "space-between",
            },
          ]}>
          
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "red" }]}
            onPress={async() => {
              
      try {
      const response = await firestore().collection('currentJob').doc(doc_id).delete();
      console.log('Document  deleted!');
    } catch (error) {
      console.error('Error removing document: ', error);
    }

            }}>
            <Text style={styles.buttonTitle}>Cancell Order</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameHeading: {
    fontWeight: "bold",
    fontSize: 23,
    color: Color.primary,
  },
  jobTitle: {
    fontSize: 15,
    color: "black",
    marginTop: 10,
  },
  jobDescription: {
    color: "gray",
  },
  featuredContainer: {
    paddingVertical: 15,
  },
  jobContainer: {
    marginHorizontal: 5,
    marginTop: 30,
    width: "100%",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },

  button: {
    padding: 10,
    flex: 1,
    marginHorizontal: 20,
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  headContainer: {
    paddingTop: 25,
    width: "100%",
    alignItems: "center",
    elevation: 5,
    backgroundColor: Color.primary,
    paddingBottom: 30,
  },
  cardContainer: {
    marginTop: 20,
    width: "90%",
    backgroundColor: "white",
    height: 100,
    alignSelf: "center",
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  jobCard: {
    width: "97%",
    padding: 10,
    marginTop: 20,
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 15,
  },
  priceHeading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  priceSubHeading: {
    color: "black",
  },

  arrow: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 50,
  },
  time: {
    alignItems: "flex-end",
  },
  timeText: {
    color: "black",
  },
  address: {
    marginLeft: 5,
    color: "black",
    fontSize: 18,
  },
});
