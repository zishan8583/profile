import React, { useContext, useState } from 'react';
import Razorpay from 'react-native-razorpay';
import { View, Text, Button } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import Color from '../constant/Color';
import AuthContext from '../store/authContext';
import WalletContext from '../store/walletContext';



  export default onPayButtonPress = (id,amount,recharge) => {

  

    console.log({"amt": amount});
    const options = {
      amount,
      key: "rzp_test_sITjIJsamcLAi0",
      name: "Call in City",
      description: "Purchase Description",
      currency: "INR",
      theme: {color: Color.primary},
      handler: (response) => {
        setPaymentId(response.razorpay_payment_id);
      },
      prefill: {
        email: "user@example.com",
        contact: "8668509865",
        name: "User zsz"
      }
    };

    Razorpay.open(options).then((data) => {
  
        console.log("data",data);

        recharge(id,amount/100)


      }).catch((error) => {
        // handle failure
        console.log(`Error: ${error.code} | ${error.description}`);
      });



  };


// MGyJ4MrNQBD9RfUp8jBl0pio	