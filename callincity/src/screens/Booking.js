import {ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from '../constant/Color';
import JobCard from '../components/JobCard';
import BaseUrl from '../constant/BaseUrl';
import AuthContext from '../store/authContext';
import firestore from '@react-native-firebase/firestore';

const Booking = ({navigation}) => {
  const [data, setData] = useState();
  const [currentBooking, setCurrentBooking] = useState();
  const authctx = useContext(AuthContext);

  const getBookings = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      user_id: authctx.id,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(BaseUrl + '/user/currentBookings', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log('====================================');
        console.log(result.data);
        console.log('====================================');
        setData(result.data);
      })
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    authctx.isLoggedIn &&
      firestore()
        .collection('currentJob')
        .where('customer_id', '==', authctx.id)
        .onSnapshot(querySnapshot => {
          let a = [];
          querySnapshot.forEach(documentSnapshot => {
            a.push({ id: documentSnapshot.id ,...documentSnapshot.data()});
          });
         
          setCurrentBooking(a);
          getBookings();
          console.log('current', currentBooking);
        });
  }, [authctx.id]);

  if (!authctx.isLoggedIn) {
    return (
    <TouchableOpacity
      onPress={()=>navigation.navigate('AuthStack')}
     style={{backgroundColor: Color.primary, alignItems: 'center', width:'50%', alignSelf: 'center', marginTop: 20, borderRadius: 15, paddingVertical:10}}>
    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>Login to see Bookings</Text>
    </TouchableOpacity>
 
 )
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      {/* <View style={styles.box}>
      <View style={[styles.row,styles.content]}>
            <View style={[styles.row,{justifyContent: 'flex-start'}]}>
            <Text style={styles.title}>Ac Service</Text>
            </View>
            <Text style={styles.price}>$500</Text>
             </View>
      </View> */}

      <View style={{width: '100%', alignItems: 'center'}}>
        {currentBooking?.reverse().map((d, index) => (
          <JobCard
            key={index}
            button={true}
            onPress={() => alert('Wait for vendor to accept')}
            location={d.location}
            customer_name={d.vendor_name || 'Not Assigned yet'}
            category={d.service.split(' ')[0]}
            service={d.service}
            scheduled_time={d.scheduled_time}
            scheduled_date={d.scheduled_date}
            doc_id = {d.id}
            // booking_id = {d.id}
          />
        ))}
        {data?.reverse().map((d, index) => (
          <JobCard
            key={index}
            button={false}
            onPress={() => {
              navigation.navigate('BookingDetails', {id: d.id});
            }}
            location={d.location}
            customer_name={d.vendor_name || 'Test'}
            category={d.category}
            service={d.service}
            scheduled_time={d.scheduled_time}
            scheduled_date={d.scheduled_date}
            booking_id={d.id}
          />
        ))}
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('recentBookings')} style={[styles.row,{width:'80%', alignItems:'center',alignSelf:'center',backgroundColor:Color.primary, marginTop:20, borderRadius:5, padding:10}]}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize:18}}>Recent Bookings</Text>
          <Icon name='chevron-right' color={'white'} size={18}/>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Booking;

const styles = StyleSheet.create({
  box: {
    width: '90%',
    height: 100,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  title: {
    fontWeight: 'bold',
    color: Color.primary,
    fontSize: 20,
    marginLeft: 5,
  },
  price: {
    color: Color.secondary,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  content: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
