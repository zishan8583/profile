import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';

export async function requestLocationPermission() 
{
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'Example App',
        'message': 'Example App access to your location '
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the location")
    } else {
      console.log("location permission denied")
      
    }
  } catch (err) {
    console.warn(err)
  }
}

const Location = () => {

    const homePlace = {
        description: 'Home',
        geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
      };
      const workPlace = {
        description: 'Work',
        geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
      };

      requestLocationPermission();

      if (true) {
        Geolocation.getCurrentPosition(
            (position) => {
              console.log(position);
            },
            (error) => {
              // See error code charts below.
              console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }


  return (
    <View style={styles.container}>
    
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',

      }}
      currentLocation={true}
      currentLocationLabel='Current location'
      predefinedPlaces={[homePlace, workPlace]}
    />

    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        marginTop:20,
        paddingHorizontal:10
    }
})