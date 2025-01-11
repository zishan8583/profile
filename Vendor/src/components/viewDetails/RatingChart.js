import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    BarChart,
  } from "react-native-chart-kit";

const RatingChart = () => {

  chartConfig ={
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
  }

  const graphStyle = {
    marginVertical: 8,
    borderRadius: 16
  
    }


      const data = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            data: [1, 2, 3, 4, 5]
          }
        ]
      };

  return (
    <View>
    <Text>Bezier Line Chart</Text>
    <BarChart
      width='100%'
      height={200}
      data={data}
      yAxisLabel="$"
      chartConfig={chartConfig}
      style={graphStyle}
    />
  </View>
  )
}

export default RatingChart

const styles = StyleSheet.create({
    
})

