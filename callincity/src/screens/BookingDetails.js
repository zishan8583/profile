import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import BaseUrl from '../constant/BaseUrl';
import Icon from 'react-native-vector-icons/Ionicons';
import Color from '../constant/Color';
import {ScrollView} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import Step from '../components/Step';

const BookingDetails = ({route}) => {
  const {id} = route.params;
  const [data, setData] = useState();
  useLayoutEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      booking_id: id,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(BaseUrl + '/booking/get', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.status == 200) {
          setData(result.data);
        }
      })
      .catch(error => console.log('error', error));
  };

  function updateRating(rating) {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "booking_id": id,
  rating
});

var requestOptions = {  
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(BaseUrl+"/booking/booking_feedback", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Order Details</Text>
        </View>

        <View style={styles.content}>
          {/* <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>Booking ID:</Text>
          <Text style={styles.itemValue}>{data?.id}</Text>
        </View> */}
          <View style={styles.row}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle}>Ordered Time</Text>
              <Text style={styles.itemValue}>
                {data?.scheduled_date + ' ' + data?.scheduled_time}
              </Text>
            </View>

            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle}>Assign Vendor</Text>

              <Text style={styles.itemValue}>{data?.vendor_name}</Text>

              <Text style={styles.itemValue}>{data?.vendor_contact_number}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle}>Location</Text>
              <Text style={styles.itemValue}>{data?.location}</Text>
            </View>
            <View style={styles.itemContainer}>
              {/* <Text style={styles.itemTitle}>Status</Text>
            <Text style={styles.itemValue}>{data?.location}</Text> */}
            </View>
          </View>

          <Step status={data?.status} />
        </View>

        <View style={[styles.content, {marginTop: 20}]}>
          <View style={styles.row}>
            <View
              style={[
                styles.itemContainer,
                {flex: 0.5, backgroundColor: 'gray'},
              ]}>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
                }}
                style={{
                  width: '100%',
                  alignSelf: 'center',
                  minHeight: 100,
                  maxHeight: 120,
                }}
              />
            </View>
            <View style={[styles.itemContainer, {alignItems: 'flex-start'}]}>
              <Text
                style={[
                  styles.itemTitle,
                  {
                    fontSize: 20,
                    marginLeft: 10,

                    textAlign: 'left',
                  },
                ]}>
                {data?.category}
              </Text>
              <Text style={styles.subTitle}>{data?.service}</Text>
              <Text style={styles.subTitle}>{'₹ ' + data?.service_rate}</Text>
            </View>
          </View>
        </View>
        <View
          style={[
            {
              marginTop: 20,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}>
          {data?.status == 4 ? (
            <View>
              <View style={[styles.row, {justifyContent: 'flex-start'}]}>
                <Icon name="checkmark-circle-sharp" size={20} color={'green'} />
                <Text style={styles.itemTitle}>Order Completed</Text>
              </View>
              <View style={{marginTop: 20}}>

              <AirbnbRating
                count={5}
                defaultRating={data?.rating || 2}
                ratingColor={Color.primary}
                size={20}
                onFinishRating={(a)=>updateRating(a)}
              />
            </View>
            </View>
          ) : null}
        </View>
      </View>
    </ScrollView>
  );
};

export default BookingDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    alignSelf: 'stretch',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    elevation: 5,
    minHeight: 110,
  },
  itemContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 10,
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    color: 'black',
    width: '40%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemValue: {
    fontSize: 16,
    textAlign: 'center',
    color: '#0B7FFF',
    width: '60%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  subTitle: {
    color: 'black',
    marginLeft: 10,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
});
