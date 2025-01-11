import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../constant/Color'

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={'white'} size={'large'}/>
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Color.primary
  }

})