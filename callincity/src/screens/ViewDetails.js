import { StyleSheet, Text, TouchableOpacity, View, Image, Button, ScrollView } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/Entypo'
import { data } from '../constant/services'
import Color from '../constant/Color'
import Included from '../components/viewDetails/Included'
import Faq from '../components/viewDetails/Faq'
import Reviews from '../components/viewDetails/Reviews'




const ViewDetails = ({route,navigation}) => {

  // const { type } = route.params;
    
  let service = data?.ac;

  navigation.setOptions({
    title: service?.serviceTitle
})

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
    
    <View style={{backgroundColor: 'white', flex: 1}}>
      {/* heading */}
      
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{service.serviceTitle}</Text>

        <View style={styles.row}>
            <Icon name='star' size={18}/>
            <Text style={styles.rating}>{service.servicRating}</Text>
        </View> 
      
        <View style={styles.row}>
            <Icon name='price-tag' color={'black'} size={18}/>
            <Text style={[styles.rating,{fontWeight:'bold', color:'black'}]}>500</Text>
        </View> 

        <TouchableOpacity style={[styles.row,styles.guide]}>
            <Icon name='text' color={Color.primary} size={18}/>
            <Text style={{marginHorizontal:12}}>Rate card</Text>
            <Icon name='chevron-right' size={18}/>
        </TouchableOpacity>  

        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'black'}}>Add</Text>
        </TouchableOpacity>

      </View>
 
      <View style={styles.seprator}/>
    
      
     {/* included */}

        <Included info={service}/>

      <View style={styles.seprator}/>
    
      {/* FAQ */}

         <Faq/>

      <View style={styles.seprator}/>
    
     {/* reviews */}
      <View style={{width:"100%", backgroundColor:'white'}}>
         <Reviews/>
      </View>
    
    </View>

   
      
    </ScrollView>
  )
}

export default ViewDetails

const styles = StyleSheet.create({

  headerContainer:{
    padding: 10,
    width: '100%',
    marginTop: 20,
    paddingBottom: 30
},
title:{
  fontWeight: 'bold',
  fontSize: 20,
  color: 'black'  
},
row:{
    flexDirection: 'row',
    alignItems: 'center'
},
  rating:{
    fontSize: 16,
    marginLeft: 5
},
guide:{
    width: '100%',
    backgroundColor: 'white',
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    paddingVertical: 12,
    alignSelf: 'center',
    paddingLeft: 15
},
seprator:{
    height: 8,
    width: '100%',
    backgroundColor: '#ccc'
},
button:{
  position:'absolute',
  top:18,
  right:30,
  borderColor: 'blue',
  borderRadius: 5,
  borderWidth: 1,
  padding: 5,
  elevation: 5,
  backgroundColor: 'white',
}


})