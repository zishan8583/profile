import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import StepIndicator from 'react-native-step-indicator';

const Step = ({status}) => {


  const [currentPosition, setCurrentPosition] = useState(status || 0);

  useEffect(() => {
    setCurrentPosition(status)
  
  }, [status])
  

  const labels = [
    'Order Confirmed',
    'Partner Assigned',
    'In Progress',
    'Completed'
  ];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013',
  };

  // onPageChange = position => {
  //   console.log('Clicked', position);
  //   setCurrentPosition(position)
  // };

  return (
    <View style={{marginVertical:20}}>
      <StepIndicator
        stepCount={4}
        customStyles={customStyles}
        currentPosition={currentPosition}
        labels={labels}
      />
    </View>
  );
};

export default Step;

const styles = StyleSheet.create({});
