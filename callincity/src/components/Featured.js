import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import ServiceCard from './ServiceCard'
import services from '../constant/services'


const Featured = ({title, rating}) => {
    
  return (
    <View>
      <View style={styles.featuredContainer}>

<Text style={styles.heading}> {title}</Text>

<View style={styles.box}>

<ScrollView horizontal showsHorizontalScrollIndicator={false} >
{
    services.map((service,index) =>(
      <ServiceCard key={index} title={service.title}   img={service.img} rating={rating}/>
    ))
}
</ScrollView>

</View>


</View>

<View style={{backgroundColor: '#ccc', height: 5, width: '100%', marginVertical: 15}}/>
    </View>
  )
}

export default Featured

const styles = StyleSheet.create({
    featuredContainer:{
        paddingVertical: 15
      },
      box:{
        flexDirection: 'row',
      },
      heading:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
      }
})