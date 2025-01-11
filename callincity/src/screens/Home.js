import { ActivityIndicator, StyleSheet, Text, View,ScrollView, Pressable, Modal, Alert, TouchableOpacity } from 'react-native'
import React,{useState,useEffect, useContext} from 'react'
import Loader from '../components/Loader'

import  Icon  from 'react-native-vector-icons/AntDesign'
import  EnIcon  from 'react-native-vector-icons/Entypo'
import SearchBar from '../components/SearchBar'
import ServiceCard from '../components/ServiceCard'
import Featured from '../components/Featured'
import services from '../constant/services'
import Appliance from '../components/models/home/Appliance'
import Plumber from '../components/models/home/Plumber'
import PestControl from '../components/models/home/PestControl'
import Color from '../constant/Color'
import Painting from '../components/models/home/Painting'
import BaseUrl from '../constant/BaseUrl'
import GeneralModel from '../components/models/home/GeneralModel'
import { CartContext } from '../store/CartContext'



let status = { appliance:false,pestControl:false,plumber:false, painting:false}

const Home = (props) => {

  const cartListctx = useContext(CartContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState();
  const [modalType, setModalType] = useState(status);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [loader, setLoader] = useState(true)
  // const [location, setLocation] = useState()
 
  useEffect(() => {
    
    //  setTimeout(()=>setLoader(false), 2000);

      getCategory();
 
  }, [])

  // if (loader) {
  //   return <Loader/>
  // }


  const getCategory = () =>{


    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
    
    fetch( BaseUrl+'category/getAll', requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === 200){
          setData(result.data)
        }
      })
      .catch(error => console.log('error', error));

  }
  

  return (
    <View style={[styles.container, (modalVisible)&& {backgroundColor: 'rgba(0,0,0,0.8)'}]}>
    
      <View style={{flex:1, width:'100%'}}>

      <View style={[styles.row,styles.headContainer,{ backgroundColor:  (modalVisible) ? Color.secondary : Color.primary}]}>
            <TouchableOpacity onPress={()=>props.navigation.navigate('location')} style={styles.location}>
              <Text  
              numberOfLines={1}
              style={styles.locationTitle}>{cartListctx.location}</Text>
            <View style={styles.row}>
              <Text 
              numberOfLines={1}
              style={styles.locationSubTitle}>{cartListctx.location}- Pune - Maharashta</Text>
              <Icon name='down' color={'white'} size={14} style={{marginLeft: 10}}/>
            </View>
            </TouchableOpacity>
            <View style={{paddingRight:10}}>
              <EnIcon 
              name='shopping-cart'
              size={25}
              onPress={()=>props.navigation.navigate('cart')}
              color={'white'}/>
            </View>
          </View>   
    
      <ScrollView  style={styles.background} showsVerticalScrollIndicator={false} >

      {/* main */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        collapsable={true}
       
      >
       {<GeneralModel onPress={() => {setModalVisible(!modalVisible)}}/>}
      {/*{modalType.plumber && <Plumber onPress={() => {setModalVisible(!modalVisible); setModalType({plumber:false})}}/>}
      {modalType.pestControl && <PestControl onPress={() => {setModalVisible(!modalVisible); setModalType({pestControl:false})}}/>}
      {modalType.painting && <Painting onPress={() => {setModalVisible(!modalVisible); setModalType({painting:false})}}/>} */}

      
      
      </Modal>

        {/* card */}
        
        <View style={{flexWrap: 'wrap', flexDirection: 'row', 
        marginTop: 8, width: "100%", justifyContent: 'space-between',
        }}>
          
          {
            data?.map((data,index) =>(
              <ServiceCard key={index} 
              onPress={() =>{ 
                // setModalVisible(true); 
                props.navigation.navigate('servicing',{id: data.id})
                // setModalType({...modalType, [service.type]:true})
                }
                } 
                title={data.category_name}
                // img={data.img}
                 />
            ))
          }
          
          

        </View>  

        <View style={{backgroundColor: '#ccc', height: 5, width: '100%', marginVertical: 15}}/>

        {/* Featured */}

        <Featured title='New and noteworthy'/>
        
        <Featured title='Most Booked Services' rating={true}/>


     </ScrollView>
     </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex:1,
    zIndex:999,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  background:{
    width: '100%',
    height: '100%',
 
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  location: {
      alignSelf: 'flex-start',
      width: '80%',
      marginVertical: 40,
      marginLeft: 5,

  },
  locationTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },
  locationSubTitle:{
    fontSize: 12,
    color: 'white'
  },
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
  },

  modalView: {
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
  buttonOpen: {
    backgroundColor: "#F194FF",
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  headContainer:{
     justifyContent: 'space-between',
    
     paddingBottom:20,
     borderBottomLeftRadius:20,
     borderBottomRightRadius:20,
     width: '100%',
     elevation:20
  }

})

