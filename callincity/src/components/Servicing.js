import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import ServiceCard from './ServiceCard';
import {data} from '../constant/services';
import Color from '../constant/Color';
import {CartContext} from '../store/CartContext';
import CounterButton from './CounterButton';
import BaseUrl from '../constant/BaseUrl';
import Faq from './viewDetails/Faq';

const Servicing = ({route, navigation}) => {
  const cartctx = useContext(CartContext);

  const [tg, setService] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: data?.serviceData?.category_name,
    });
  }, [data]);

  const getData = () => {
    const {id} = route.params;
    // let ser = data?.[type];
    // setService(ser);

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      id,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(BaseUrl + '/category/get', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log('====================================');
        console.log("aa",result);
        console.log('====================================');
        if (result.status == 200) {
          setData(result.data);
        }
      })
      .catch(error => console.log('error', error));
  };
  // const {type} = route.params;
  // let service = data?.[type];

  // function getCounter(counter) {
  //   console.log('====================================');
  //   console.log(counter);
  //   console.log('====================================');
  // }

  return (
    <View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{backgroundColor: 'white', flex: 1}}>
          {/* heading */}

          <View style={styles.headerContainer}>
            <Text style={styles.title}>
              {data?.categoryData?.category_name}
            </Text>
            <Text style={styles.info}>{data?.categoryData?.category_desc}</Text>

            <View style={styles.row}>
              <Icon name="star" size={18} />
              {/* <Text style={styles.rating}>{data.serviceRating}</Text> */}
            </View>

            <TouchableOpacity style={[styles.row, styles.guide]}>
              <Icon name="heart" size={18} />
              <Text style={{marginHorizontal: 12}}>Guides</Text>
              <Icon name="chevron-right" size={18} />
            </TouchableOpacity>
          </View>

          <View style={styles.seprator} />

          {/* services */}

          <View style={styles.serviceConatiner}>
            <View style={styles.map}>
              {data?.serviceData?.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.service_name}
                  img={service.img}
                />
              ))}
            </View>
          </View>

          <View style={styles.seprator} />

          {/* details */}

          {/* yhaan pr daalna niche waala code */}

          {data.serviceData?.map((service, index) => (
            <View
              key={index}
              style={[styles.details, {alignItems: 'flex-start'}]}>
              <Text style={[styles.title, {fontSize: 20, marginBottom: 30}]}>
                {service.service_name}
              </Text>

              <View
                key={index}
                style={[
                  styles.details,
                  styles.row,
                  {alignItems: 'flex-start'},
                ]}>


                <View style={styles.info}>
                  
                    <View style={styles.row}>
                      <Icon name="star" size={18} />
                      {/* <Text style={styles.rating}>{service.rating}</Text> */}
                    </View>

                    <View style={[styles.row, {marginVertical: 10}]}>
                      <Icon name="price-tag" size={18} color="black" />
                      <Text style={styles.price}>{service.service_rate}</Text>
                    </View>

                    <View key={index} style={{ width:'100%'}}>
                      {service.service_desc.split('\n').map((t) => (
                        <View style={[styles.row,{ width:'100%'}]}>
                          <Icon name="dot-single" size={12} />
                          <Text style={{marginLeft: 10, fontSize: 12, width: '90%'}}>
                            {t}
                          </Text>
                        </View>
                      ))}
                    </View>

                    {/* <Text
                      style={{color: 'blue', fontSize: 16, marginTop: 20}}
                      onPress={() => navigation.navigate('viewDetails')}>
                      View Details
                    </Text> */}

                    <View style={{paddingVertical: 20}} />
                
                </View>

                <View style={styles.image}>
                  <Image
                    style={styles.img}
                    source={{
                      uri:
                        service.category_img ||
                        'https://media.istockphoto.com/vectors/insurance-hand-icon-risk-coverage-sign-vector-vector-id1226966972?k=20&m=1226966972&s=612x612&w=0&h=4STddzCaJjYZNagXpw8PS2odwiNXm559OsNHwUMfFhE=',
                    }}
                  />

                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      cartctx.name?.some(e => e.id === service.id)
                        ? cartctx.removeItem(service.id, service.service_rate)
                        : cartctx.addItem(service);
                      console.log(cartctx.name);
                    }}>
                    <Text style={{color: 'red'}}>
                      {/* {cartctx?.name[index]?.id?.includes(service.id)
                      ? 'Added'
                      : 'Add'} */}

                      {cartctx.name?.some(e => e.id === service.id)
                        ? 'Added'
                        : 'Add'}
                    </Text>
                  </TouchableOpacity>
                  {/* <CounterButton
                  getCounter={getCounter}
                  onAdd={() => {
                    cartctx.addItem(st);
                  }}
                /> */}
                </View>




              </View>
            </View>
          ))}
        </View>
      
          <Faq id={data?.categoryData?.id}/>

      </ScrollView>
      {cartctx.name?.length > 0 && (
        <TouchableOpacity
          onPress={() => navigation.navigate('cart')}
          style={styles.cartDailog}>
          <Text style={styles.checkoutText}>Checkout Now</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Servicing;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    width: '100%',
    marginTop: 20,
    paddingBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    marginLeft: 5,
  },
  guide: {
    width: '100%',
    backgroundColor: 'white',
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    paddingVertical: 12,
    alignSelf: 'center',
    paddingLeft: 15,
  },
  seprator: {
    height: 12,
    width: '100%',
    backgroundColor: '#ccc',
  },
  serviceConatiner: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  map: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  details: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  price: {
    fontWeight: 'bold',
    marginLeft: 2,
    color: 'black',
  },
  detailTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginVertical: 10,
  },
  image: {
    marginTop: 20,
    width: '29%',
    height: '100%',
  },
  info: {
    width: '70%',
  },
  img: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    elevation: 1,
    marginTop: 20,
  },
  button: {
    width: '80%',
    paddingVertical: 5,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    marginTop: 15,
    elevation: 1,
    backgroundColor: 'white',
  },
  cartDailog: {
    position: 'absolute',
    bottom: 10,
    width: '70%',
    borderRadius: 10,
    backgroundColor: Color.primary,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  checkoutText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
