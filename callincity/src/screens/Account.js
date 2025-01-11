import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';

import Icon from 'react-native-vector-icons/AntDesign';
import AuthContext from '../store/authContext';



const Account = ({navigation}) => {

  const authCtx = useContext(AuthContext);

  let titles = [
    {name: 'Register as Partner'},
    {name: 'My Bookings', navigate: 'about'},
    {name: 'Manage Addresses', navigate: 'share'},
    {name: 'My Wallet', navigate: 'rate'},
    {name: 'My Rating', navigate: 'refer '},
    {name: 'Refer & Earn', navigate: 'about'},
    {name: 'My Gift Cards', navigate: 'share'},
    {name: 'Manage Payment Options', navigate: 'rate'},
    {name: 'Register as Partner', navigate: 'refer '},
    {name: 'Settings', navigate: 'about'},
    {name: 'About Company', navigate: 'about'},
    {name: 'Share App', navigate: 'share'},
    {name: 'Rate Now', navigate: 'rate'},
    {name: 'Sheduled Booking', navigate: 'refer '},
  ];

  return (
    <ScrollView style={styles.background}>
      {/* main */}

      <View style={styles.container}>
        <Pressable
          style={[styles.list, {marginBottom: 20}]}
          onPress={() => navigation.navigate('profile')}>
          <View style={styles.row}>
            <View style={styles.dp}></View>
            <Text style={styles.name}>Verified Customer</Text>
          </View>
          <Icon name="right" size={18} color="black" />
        </Pressable>
        {/* <View style={{marginTop: 20}}> */}
        {titles.map((title, index) => (
          <View style={styles.list} key={index}>
            <View style={styles.row}>
              <Text style={[styles.name, {fontSize: 14}]}>{title.name}</Text>
            </View>
            <Icon name="right" size={16} />
          </View>
        ))}
        {/* </View> */}
        <View
          style={{
            paddingVertical: 20,
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            width: '100%',
          }}>
          <Text style={{color: 'blue'}} onPress={()=>{console.log("logout"); authCtx.logout()}}>Log Out</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 5,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  list: {
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderBottomWidth: 0.2,
    paddingVertical: 20,
  },
  dp: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#ccc',
  },
  name: {
    marginLeft: 20,
    fontSize: 18,
    color: 'black',
  },
});
