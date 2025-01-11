import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CartContext} from '../store/CartContext';
import Color from '../constant/Color';
import AuthContext from '../store/authContext';
import BaseUrl from '../constant/BaseUrl';
import BookingDetails from './BookingDetails';
import firestore from '@react-native-firebase/firestore';

const Cart = ({navigation}) => {
  const cartListctx = useContext(CartContext);
  const authctx = useContext(AuthContext);

  const bookingHandler = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let format1 = `${year}-${month + 1}-${day}`;

    let format2 = date.toTimeString().split(' ')[0];

    let time = format1 + ' ' + format2;

    var raw = JSON.stringify({
      customer_id: authctx.id,
      service_id: cartListctx.name[0]?.id,
      location: 'Kondhwa',
      dateTime: time,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(BaseUrl + '/booking/new', requestOptions)
      .then(response => response.json())
      .then(result => {
        alert('Booked successfulyy');
      })
      .catch(error => console.log('error', error));
  };

  const add = () => {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let format1 = `${year}-${month + 1}-${day}`;

    let format2 = date.toTimeString().split(' ')[0];

    let time = format1 + ' ' + format2;

    firestore()
      .collection('currentJob')
      .add({
        customer_id: authctx.id,
        service_id: cartListctx.name[0]?.id,
        category_id: cartListctx.name[0]?.category_id,
        location: cartListctx.location,
        dateTime: time,
        status: 0,
        customer_name: authctx.name,
        category: '',
        service: cartListctx.name[0]?.service_name,
        location: cartListctx.location,
        scheduled_time: format2,
        scheduled_date: format1,
      })
      .then(() => {
        console.log('User added!');
        alert('Booked Succesfull');
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  const handle = () =>{
    add();
    cartListctx.resetItem();
  }

  return (
    <ScrollView style={styles.background} contentContainerStyle={{flexGrow: 1}}>
      <View style={{marginVertical: 20, alignSelf: 'center', width: '90%'}}>
        {/* list */}

        {cartListctx?.name?.map((list, index) => (
          <View style={styles.box} key={index}>
            <View style={[styles.row, styles.content]}>
              <Icon
                name="trash"
                onPress={() => {
                  cartListctx.removeItem(list.id, list.service_rate);
                }}
                size={22}
                color="white"
              />
              <View
                style={[
                  styles.row,
                  {justifyContent: 'space-between', width: '90%'},
                ]}>
                <View
                  style={[styles.row, {width: '100%', alignItems: 'center'}]}>
                  <View style={{width: '60%'}}>
                    <Text style={styles.title}>{list.service_name}</Text>
                  </View>
                  <View style={{width: '30%'}}>
                    <Text style={styles.price}>₹{list.service_rate}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* payment summary */}

      <View style={styles.seprator} />

      <View style={styles.listContainer}>
        {cartListctx.totalPrice > 0 && (
          <Text style={styles.header}>Payment Summary</Text>
        )}

        {/* <View style={[styles.row]}>
          <Text style={styles.bill}>Item Total</Text>
          <Text style={styles.bill}>${cartListctx.totalPrice}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bill}>Taxes and Fee</Text>
          <Text style={styles.bill}>$0</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bill}>Item Discount</Text>
          <Text style={styles.bill}>$0</Text>
        </View> */}

        {cartListctx.totalPrice > 0 ? (
          <View style={styles.row}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.total}>${cartListctx.totalPrice}</Text>
          </View>
        ) : (
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 18,
              color: 'black',
            }}>
            No Items in the cart
          </Text>
        )}
      </View>

      {cartListctx.totalPrice > 0 && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            authctx.isLoggedIn ? handle() : navigation.navigate('AuthStack');
          }}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
            Confirm Booking
          </Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  listContainer: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },

  bill: {
    color: 'black',
    marginVertical: 15,
    fontSize: 18,
  },

  seprator: {
    height: 8,
    width: '100%',
    backgroundColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  total: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    marginTop: 20,
  },
  header: {
    width: '100%',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  button: {
    backgroundColor: Color.primary,
    width: 150,
    paddingVertical: 10,
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
  box: {
    width: '100%',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 2,
    elevation: 3,
    backgroundColor: Color.primary,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginLeft: 5,
  },
  price: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  content: {
    width: '100%',
  },
});
