import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Color from "../../constant/Color";
import Icon from "react-native-vector-icons/Entypo";
import Wallet from "../account/Wallet";
import BaseUrl from "../../constant/BaseUrl";
import AuthContext from "../../store/authContext";
import WalletContext from "../../store/walletContext";

const Recents = ({ navigation, route }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [transaction, setTransaction] = useState();
  const walletCtx = useContext(WalletContext);
  const authCtx = useContext(AuthContext);

  useEffect(() => {

    const getTransaction = () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify({
        vendor_id: authCtx.user.id,
      });
  
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
  
      fetch(BaseUrl + "/vendor/transactions", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.status == 200) {
            setTransaction(result.data)
            console.log('====================================');
            console.log(result.data);
            console.log('====================================');
          }
        })
        .catch((error) => console.log("error", error));
    };

    getTransaction();
  
  }, [walletCtx.amount])
  

  

  return (
    <View style={{ flexGrow: 1 }}>
      <View style={styles.headContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("home")}
          style={{
            position: "absolute",
            top: 20,
            left: 12,
            backgroundColor: "white",
            borderRadius: 50,
            padding: 5,
          }}>
          <Icon name="chevron-left" color={Color.primary} size={18} />
        </TouchableOpacity>
        <View style={styles.row}>
          <View>
            <Text
              style={[styles.priceHeading, { fontSize: 18, marginTop: 60 }]}>
              Available Recharge
            </Text>
            <Text style={styles.priceHeading}>₹{walletCtx.amount}</Text>
          </View>
          <TouchableOpacity
            onPress={() => setIsVisible(true)}
            style={{
              backgroundColor: "white",
              padding: 10,
              marginTop: 80,
              borderRadius: 10,
            }}>
            <Icon name="wallet" color={Color.primary} size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
        {
          transaction?.map((t, index)=>(
       
          <TouchableOpacity onPress={()=>{((t.booking_id)&& navigation.navigate('BookingDetails',{id:t.booking_id}))}} style={[styles.transaction, styles.row]}>
            <View>
              <Text style={styles.name}>Call in City</Text>
              <Text style={styles.type}>{t.remark}</Text>
              <Text style={styles.type}>{t.created_at}</Text>
            </View>
            <View style={[styles.amount, (t.type == 'Debit') && {backgroundColor: "#ffc9bb", borderColor: "red" }]}>
              <Text style={{ color:(t.type == "credit") ? "green" : 'red' }}> ₹{t.amount}</Text>
            </View>
          </TouchableOpacity>
          ))
          
         }
        </View>
      </ScrollView>
      <Wallet isVisible={isVisible} setIsVisible={setIsVisible} />
    </View>
  );
};

export default Recents;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  headContainer: {
    paddingTop: 25,
    width: "100%",
    elevation: 0,
    backgroundColor: Color.primary,
    paddingBottom: 30,
    paddingHorizontal: 30,
    zIndex: 999,
  },
  priceHeading: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  date: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
  },
  transaction: {
    width: "100%",
    backgroundColor: "white",
    padding: 5,
    marginVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    elevation: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    color: "black",
    fontWeight: "bold",
    fontSize: 22,
  },
  type: {
    color: "gray",
    fontSize: 12,
    marginTop: 3,
  },
  amount: {
    borderWidth: 1,
    borderColor: "green",
    padding: 10,
    minWidth: 80,
    backgroundColor: "#E1EDE0",
    borderRadius: 30,
    alignItems: "center",
  },
});

/* <Text style={styles.date}>Today</Text> */