import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import services from '../constant/services';
import Color from '../constant/Color';

const ServiceCard = ({rating, title, onPress, img}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <View>
          <View style={styles.box}>
            <Image style={styles.tinyLogo} source={img} />
          </View>
        </View>
        <Text style={styles.title}>{title}</Text>
        {rating && (
          <View style={{width: '80%', alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'row',  
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Icon name="star" color="white" />
              <Text style={{marginLeft: 5, color: 'white'}}>4.74</Text>
            </View>
            {/* <Text>$ 315</Text> */}
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: 100,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#7895B2',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  box: {
    borderRadius: 5,
    height: 80,
    paddingTop: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
    marginHorizontal: 1,
    color: 'black',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  tinyLogo: {
    flex: 1,
    alignSelf: 'center',
  },
});
