import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";

import Loader from "../../components/Loader";
import Icon from "react-native-vector-icons/FontAwesome";
import Color from "../../constant/Color";
import JobCard from "../../components/JobCard";
import Form from "../profile/Form";
import AuthContext from "../../store/authContext";
import BaseUrl from "../../constant/BaseUrl";
import { FlatList } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { notificationListner, requestUserPermission } from "../../components/PushNotification";
import WalletContext from "../../store/walletContext";

const Home = ({ navigation }) => {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState(true);
  const [amount, setAmount] = useState(0)
  const authCtx = useContext(AuthContext);
  const [currentBooking, setCurrentBooking] = useState();

  const walletctx = useContext(WalletContext);

 

  useEffect(() => {
    setTimeout(() => setLoader(false), 2000);

    getBalance();

    requestUserPermission();
    notificationListner();

    firestore()
      .collection("currentJob")
      .onSnapshot((querySnapshot) => {
        let a = [];
        querySnapshot.forEach((documentSnapshot) => {
          a.push({id: documentSnapshot.id, ...documentSnapshot.data()});
          
        });
        setCurrentBooking(a);
        getBalance();
  
      });
  }, []);

 
  const getBalance = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      vendor_id: authCtx.user.id
    });
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    console.log("s",authCtx.user.id);
  
    fetch(BaseUrl + "vendor/getWallet", requestOptions)
      .then((response) => response.json())
      .then((result) =>{
        if (result.status == 200) {

          console.log("amt",parseInt(result.data.balance));
          walletctx.addAmount(parseInt(result.data.balance));
          
        }
        else{
          alert("Error to fetch");
          console.log(result)
        }
  })
      .catch((error) => alert("error"));
  };
  

  if (loader) return <Loader />;



  return (
    <View style={styles.container}>
      <View style={{ flex: 1, width: "100%" }}>
        {/* header */}
        <View style={styles.headContainer}>
          <View style={[styles.cardContainer, styles.row]}>
            <View style={styles.priceDetails}>
              <Text style={styles.priceHeading}>₹{walletctx.amount}</Text>
              <Text style={styles.priceSubHeading}>
                Wallet Balance
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("recents")}
              style={styles.arrow}>
              <Icon color={Color.primary} size={18} name="arrow-right" />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={styles.background}
          showsVerticalScrollIndicator={false}>
          {/* main */}

          <View style={styles.jobContainer}>
            <Text style={styles.heading}>{currentBooking?.length || 0}Jobs Notification</Text>
            <Text>{currentBooking?.id }</Text>
            <FlatList
              data={currentBooking}
              renderItem={({ item, index }) =>  (
                
                <JobCard
                  button={true}
                  customer_name={item.customer_name}
                  category={item.service.split(' ')[0]}
                  service={item.service}
                  location={item.location}
                  scheduled_date={item.scheduled_date}
                  scheduled_time={item.scheduled_time}
                  customer_id={item.customer_id}
                  service_id={item.service_id}
                  doc_id={item.id}
                />
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 999,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameHeading: {
    fontWeight: "bold",
    fontSize: 23,
    color: "black",
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
    padding: 10,
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
    borderWidth: 0.5,
    elevation: 5,
    borderRadius: 10,
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
