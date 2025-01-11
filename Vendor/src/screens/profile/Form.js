import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useCallback, useContext, useEffect } from "react";
import Color from "../../constant/Color";
import Icon from "react-native-vector-icons/FontAwesome5";
import DocumentPicker from "react-native-document-picker";
import AuthContext from "../../store/authContext";
import BaseUrl from "../../constant/BaseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState("");

  useEffect(() => {

    (async () => {
      const data = await AsyncStorage.getItem('Submit') ;
      if (data) {
        setIsSubmitted(data)
      }
    })();
  


  }, []);

  const [showPersnol, setPersnol] = useState(false);
  const [showDocument, setDocument] = useState(false);

  const [persnolDetails, setPersnolDetails] = useState({});

  const [aadhar, setAadhar] = useState([]);
  const [pan, setPan] = useState([]);
  const [shopAct, setShopAct] = useState([]);
  const [gst, setGst] = useState([]);

  const authCtx = useContext(AuthContext);

  const handleDocumentSelection = useCallback(async (type) => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: "fullScreen",
      });

      if (type === "aadhar_card") {
        setAadhar(response);
      } else if (type === "shop_act") {
        setShopAct(response);
      } else if (type === "gst") {
        setGst(response);
      } else if (type === "pan_card") {
        setPan(response);
      }
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const submitDetail = async () => {
    const { name, contact_number, address, city, pincode, state } =
      persnolDetails;

    console.log("====================================");
    console.log("entereeeddddd");
    console.log("====================================");

    if (!aadhar.length && !pan.length && !shopAct.length && !gst.length) {
      return alert("Upload all Documents");
    }

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("contact_number", contact_number);
    formdata.append("address", address);
    formdata.append("city", city);
    formdata.append("pincode", pincode);
    formdata.append("state", state);
    formdata.append("company_name", "RealShop");
    formdata.append("about", "It is the about");
    formdata.append("aadhar_card", aadhar[0], aadhar[0].uri);
    formdata.append("pan_card", pan[0], pan[0].uri);
    formdata.append("gst", gst[0], gst[0].uri);
    formdata.append("shop_act", shopAct[0], shopAct[0].uri);
    formdata.append("vendor_id", authCtx.user.id);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(BaseUrl + "/vendor/kyc", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log('====================================');
        console.log("Resss", result);
        console.log('====================================');
        if (result.status == 200) {
          console.log('====================================');
          console.log(result.message);
          console.log('====================================');
          AsyncStorage.setItem("Submit", "submitted");
          alert("Submitted Succesfully")
          setIsSubmitted("submited")
        }
      })
      .catch((error) => console.log("error", error));

  //   try {
  //     const response = await fetch(BaseUrl + "/vendor/kyc", requestOptions);
  //     const result = response.json();
  //     console.log('====================================');
  //     console.log(result);
  //     console.log('====================================');
  //     if (result.status === 200) {
  //       console.log("====================================");
  //       console.log(result.message);
  //       console.log("====================================");
  //       AsyncStorage.setItem("Submit", "submitted");
  //       setIsSubmitted(AsyncStorage.getItem('submit'));
  //       alert("Submitted Succesfully");
  //     }
  //   } catch (error) {
  //     console.log("====================================");
  //     console.log("error", error);
  //     console.log("====================================");
  //   }
  };

  return (
    <>
      {isSubmitted.length > 2 ? (
        <Text>We Will contact you soon</Text>
      ) : (
        <View style={styles.form}>
          <View>
            <View style={styles.persnolDetails}>
              <Text style={styles.title}>Persnol Details</Text>

              <Icon
                size={20}
                onPress={() => setPersnol(!showPersnol)}
                color={"black"}
                style={{ marginLeft: 2 }}
                name={showPersnol ? "caret-up" : "caret-down"}
              />
            </View>

            {showPersnol && (
              <View>
                <TextInput
                  placeholder="Name"
                  style={styles.input}
                  onChangeText={(name) => {
                    setPersnolDetails((prev) => ({ ...prev, name }));
                  }}
                />
                <TextInput
                  placeholder="Phone"
                  style={styles.input}
                  onChangeText={(contact_number) => {
                    setPersnolDetails((prev) => ({ ...prev, contact_number }));
                  }}
                />
                <TextInput
                  placeholder="Address"
                  style={styles.input}
                  onChangeText={(address) => {
                    setPersnolDetails((prev) => ({ ...prev, address }));
                  }}
                />
                <TextInput
                  placeholder="City"
                  style={styles.input}
                  onChangeText={(city) => {
                    setPersnolDetails((prev) => ({ ...prev, city }));
                  }}
                />
                <TextInput
                  placeholder="State"
                  style={styles.input}
                  onChangeText={(state) => {
                    setPersnolDetails((prev) => ({ ...prev, state }));
                  }}
                />
                <TextInput
                  placeholder="Pincdoe"
                  style={styles.input}
                  keyboardType="numeric"
                  onChangeText={(pincode) => {
                    setPersnolDetails((prev) => ({ ...prev, pincode }));
                  }}
                />
              </View>
            )}
          </View>

          <View>
            <View style={styles.persnolDetails}>
              <Text style={styles.title}>Documents</Text>

              <Icon
                size={20}
                onPress={() => setDocument(!showDocument)}
                color={"black"}
                style={{ marginLeft: 2 }}
                name={showDocument ? "caret-up" : "caret-down"}
              />
            </View>

            {showDocument && (
              <View>
                <View style={[styles.input, styles.row]}>
                  <Text style={styles.placeholder}>Upload Aadhar card</Text>
                  <Icon
                    name="file-alt"
                    color={aadhar.length > 0 ? "green" : "black"}
                    size={22}
                    onPress={() => handleDocumentSelection("aadhar_card")}
                  />
                </View>
                <View style={[styles.input, styles.row]}>
                  <Text style={styles.placeholder}>Upload PAN Card</Text>
                  <Icon
                    name="file-alt"
                    color={pan.length > 0 ? "green" : "black"}
                    size={22}
                    onPress={() => handleDocumentSelection("pan_card")}
                  />
                </View>
                <View style={[styles.input, styles.row]}>
                  <Text style={styles.placeholder}>Upload GST No.</Text>
                  <Icon
                    name="file-alt"
                    color={gst.length > 0 ? "green" : "black"}
                    size={22}
                    onPress={() => handleDocumentSelection("gst")}
                  />
                </View>
                <View style={[styles.input, styles.row]}>
                  <Text style={styles.placeholder}>Upload Shop Act</Text>
                  <Icon
                    name="file-alt"
                    color={shopAct.length > 0 ? "green" : "black"}
                    size={22}
                    onPress={() => handleDocumentSelection("shop_act")}
                  />
                </View>
              </View>
            )}

            <TouchableOpacity style={styles.button}>
              <Text
                style={{ color: "black", fontSize: 18 }}
                onPress={() => {
                  submitDetail();
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default Form;

const styles = StyleSheet.create({
  form: {
    width: "90%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 20,
    backgroundColor: Color.primary,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    marginVertical: 8,
    paddingRight: 10,
  },
  persnolDetails: {
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  title: {
    fontWeight: "bold",
    color: "black",
    fontSize: 18,
    marginLeft: 8,
  },
  placeholder: {
    marginVertical: 5,
    marginLeft: 10,
    fontSize: 14,
  },
  row: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    width: "50%",
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    marginTop: 20,
  },
});
