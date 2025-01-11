import { StyleSheet, Text, View, Pressable, ScrollView,  } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/Entypo'
import Color from '../../../constant/Color'
import ServiceCard from '../../ServiceCard'
import {appliance} from '../../../constant/services'
import ServiceNavHandler from '../../../actions/ServiceNavHandler'
import { useNavigation } from '@react-navigation/native';

const Appliance = ({onPress}) => {
  const navigation = useNavigation();
  return (

    <ScrollView contentContainerStyle={{flexGrow: 1}}>
    <View style={styles.centeredView}>
    <View style={{marginTop: 20, backgroundColor: 'white', borderRadius: 50}}>
        <Icon name='cross' color={Color.primary} size={25}   onPress={onPress}/>
    </View>
    <View style={styles.modalView}>
    <View style={{width: '100%', 
     backgroundColor: Color.primary,
     padding: 10,
     borderRadius: 12,
     alignItems: 'center',
     elevation: 8
     }}>
    <Text style={[styles.heading,{color:'white'}]}>Appliance Repair & Service</Text>
    </View>

    <View style={{width: '100%', alignItems: 'flex-start', marginTop: 60}}>
    <Text style={styles.heading}>Repair & Service</Text>
    </View>
    
    

    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
    {
        appliance.map((salon,index)=>{
          let data = salon;
        return(
            <ServiceCard title={salon.title}
             img={salon.img}
             key={index}
             onPress={()=>ServiceNavHandler(salon,onPress,navigation)}
              />
        )})
    }
    </View>
      
    </View>
    </View>
    </ScrollView>
  )
}

export default Appliance

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    
    },
    modalView: {
      width: "100%",
      height: '100%',
      marginTop: 5,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 10,
      paddingTop: 40,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    heading:{
        fontWeight: 'bold',
        fontSize: 22,
        color: 'black',
    }
  });