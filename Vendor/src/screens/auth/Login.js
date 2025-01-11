import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";

import Icon from "react-native-vector-icons/Entypo";
import Color from "../../constant/Color";
import { Button } from "@rneui/base";
import BaseUrl from "../../constant/BaseUrl";
import AuthContext from "../../store/authContext";
import Form from "../profile/Form";

const Login = ({ navigation, route }) => {
  const [otp, setOtp] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [url, setUrl] = useState("vendor/validate_otp");
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (route.params) {
      console.log("====================================");
      console.log("route", route.params);
      console.log("====================================");

      if (route.params.mode) {
        setOtp(true);
        setEmail(route.params.mobile);
      }
    }
  }, [route.params]);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const handleLogin = () => {
    if (otp) {
      var raw = JSON.stringify({
        email_id: email,
        otp: otpValue,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(BaseUrl + url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log("====================================");
          console.log("res", result);
          console.log("====================================");
          if (result.error) {
            alert(result.error);
          }
          // if(result.data.token)
          else {
            authCtx.login(
              result.data.token,
              result.data.vendor_id,
              result.data.status
            );

            console.log(result.data.status);
            setOtp(false)
            navigation.navigate("HomeTab");
          }
        })
        .catch((error) => console.log("error", error));
    } else {
     
        hitLoginApi(BaseUrl + "vendor/login");
        return;
      
    }
  };

  const hitLoginApi = (URL) => {
    console.log("====================================");
    console.log(URL);
    console.log("====================================");
    var raw = JSON.stringify({
      email_id: email,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(URL, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.error) {
          alert(result.error);
        } else {
          setOtp(true);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.primary,
      }}>
      <View style={styles.inputContainer}>
        <View style={{ width: "100%", height: 60 }}>
          <Image
            source={require("../../constant/images/Call-in-city-logo.png")}
            style={{
              flex: 1,
              width: "70%",
              alignSelf: "center",
              resizeMode: "contain",
            }}
          />
        </View>

        {otp ? (
          <View>
            {/* <Icon
              name={showPassword ? 'eye' : 'eye-with-line'}
              size={20}
              color="#000"
              onPress={() => {
                setShowPassword(!showPassword);
              }}
              style={{position: 'absolute', right: 30, top: 40, zIndex: 100}}
            /> */}
            <TextInput
              style={styles.input}
              placeholder="OTP"
              onChangeText={(t) => setOtpValue(t)}
              // secureTextEntry={showPassword}
            />
          </View>
        ) : (
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            keyboardType="email-address"
            onChangeText={(t) => setEmail(t)}
          />
        )}

        <View style={styles.handler}>
          <Text onPress={handleLogin} style={styles.button}>
            Login
          </Text>
          <Text
            style={styles.button}
            onPress={() => navigation.navigate("SignUp")}>
            Sign Up
          </Text>
        </View>
      </View>
      {otp && (
        <Text
          style={{
            marginTop: 20,
            color: "white",
            fontWeight: "bold",
            fontSize: 16,
          }}
          onPress={()=> setOtp(false) }
          >
          Go Back
        </Text>
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 0.2,
    color: "#000",
    width: "80%",
    marginTop: 20,
    alignSelf: "center",
  },
  inputContainer: {
    width: "80%",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "#ccc",
    paddingVertical: 30,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
  },
  handler: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignSelf: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: Color.primary,
    padding: 5,
    borderRadius: 5,
    flex: 1,
    width: "100%",
    elevation: 5,
    textAlign: "center",
    margin: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
