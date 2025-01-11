import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import StepIndicator from "react-native-step-indicator";
import AuthContext from "../store/authContext";
import BaseUrl from "../constant/BaseUrl";

const Step = ({onStatusChange, id,status}) => {
  const [currentPosition, setCurrentPosition] = useState(2);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    setCurrentPosition(status-1)
  }, [status])
  
 

  const labels = [
    "Order Confirmed",
    "Partner Assigned",
    "In Progress",
    "Completed",
  ];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: "#fe7013",
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: "#fe7013",
    stepStrokeUnFinishedColor: "#aaaaaa",
    separatorFinishedColor: "#fe7013",
    separatorUnFinishedColor: "#aaaaaa",
    stepIndicatorFinishedColor: "#fe7013",
    stepIndicatorUnFinishedColor: "#ffffff",
    stepIndicatorCurrentColor: "#ffffff",
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: "#fe7013",
    stepIndicatorLabelFinishedColor: "#ffffff",
    stepIndicatorLabelUnFinishedColor: "#aaaaaa",
    labelColor: "#999999",
    labelSize: 13,
    currentStepLabelColor: "#fe7013",
  };

  onPositionChange = (position) => {

    if (position != 0) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

 

      var raw = JSON.stringify({
        booking_id: id,
        status: position+1,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        BaseUrl + '/booking/updateStatus',
        requestOptions
      )
        .then((response) => response.json())
        .then((result) =>{
          if (result.status === 200) {
            setCurrentPosition(position);
            if (position == 3) {
              console.log("check");
              onStatusChange(position)      
            }
           
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  return (
    <View style={{ marginVertical: 20 }}>
      <StepIndicator
        stepCount={4}
        customStyles={customStyles}
        currentPosition={currentPosition}
        labels={labels}
        onPress={onPositionChange}
      />
    </View>
  );
};

export default Step;

const styles = StyleSheet.create({});
