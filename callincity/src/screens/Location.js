import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';
import Color from '../constant/Color';
import {CartContext} from '../store/CartContext';

const Location = ({route}) => {
  const cartListctx = useContext(CartContext);

  // const [value, setValue] = useState(null);

  const data = [
    {label: 'Ambegaon Budruk', value: 'Ambegaon Budruk'},
    {label: 'Aundh', value: 'Aundh'},
    {label: 'Baner', value: 'Baner'},
    {label: 'Bavdhan Khurd', value: 'Bavdhan Khurd'},
    {label: 'Bavdhan Budruk', value: 'Bavdhan Budruk'},
    {label: 'Balewadi', value: 'Balewadi'},
    {label: 'Shivajinagar', value: 'Shivajinagar'},
    {label: 'Bibvewadi', value: 'Bibvewadi'},
    {label: 'Bhugaon', value: 'Bhugaon'},
    {label: 'Bhukum', value: 'Bhukum'},
    {label: 'Dhankawadi', value: 'Dhankawadi'},
    {label: 'Dhanori', value: 'Dhanori'},
    {label: 'Dhayari', value: 'Dhayari'},
    {label: 'Erandwane', value: 'Erandwane'},
    {label: 'Fursungi', value: 'Fursungi'},
    {label: 'Ghorpadi', value: 'Ghorpadi'},
    {label: 'Hadapsar', value: 'Hadapsar'},
    {label: 'Hingne Khurd', value: 'Hingne Khurd'},
    {label: 'Karve Nagar', value: 'Karve Nagar'},
    {label: 'Kalas', value: 'Kalas'},
    {label: 'Katraj', value: 'Katraj'},
    {label: 'Khadki', value: 'Khadki'},
    {label: 'Kharadi', value: 'Kharadi'},
    {label: 'Kondhwa', value: 'Kondhwa'},
    {label: 'Koregaon Park', value: 'Koregaon Park'},
    {label: 'Kothrud', value: 'Kothrud'},
    {label: 'Lohagaon', value: 'Lohagaon'},
    {label: 'Manjri', value: 'Manjri'},
    {label: 'Markal', value: 'Markal'},
    {label: 'Mohammed Wadi', value: 'Mohammed Wadi'},
    {label: 'Manjri', value: 'Manjri'},
    {label: 'Mundhwa', value: 'Mundhwa'},
    {label: 'Nanded', value: 'Nanded'},
    {label: 'Parvati', value: 'Parvati'},
    {label: 'Panmala', value: 'Panmala'},
    {label: 'Pashan', value: 'Pashan'},
    {label: 'Pirangut', value: 'Pirangut'},
    {label: 'Shivane', value: 'Shivane'},
    {label: 'Sus', value: 'Sus'},
    {label: 'Undri', value: 'Undri'},
    {label: 'Vishrantwadi', value: 'Vishrantwadi'},
    {label: 'Vitthalwadi', value: 'Vitthalwadi'},
    {label: 'Vadgaon Khurd', value: 'Vadgaon Khurd'},
    {label: 'Kalewadi', value: 'Kalewadi'},
    {label: 'Vadgaon Sheri', value: 'Vadgaon Sheri'},
    {label: 'Wagholi', value: 'Wagholi'},
    {label: 'Wanwadi', value: 'Wanwadi'},
    {label: 'Warje', value: 'Warje'},
    {label: 'Yerwada', value: 'Yerwada'},
    {label: 'Akurdi', value: 'Akurdi'},
    {label: 'Bhosari', value: 'Bhosari'},
        
    {label: 'Charholi Budruk', value: 'Charholi Budruk'},
    {label: 'Chikhli', value: 'Chikhli'},
    {label: 'Chimbali', value: 'Chimbali'},
    {label: 'Chinchwad', value: 'Chinchwad'},
    {label: 'Dapodi', value: 'Dapodi'},
    {label: 'Dehu Road', value: 'Dehu Road'},
    {label: 'Dighi', value: 'Dighi'},
    {label: 'Dudulgaon', value: 'Dudulgaon'},
    {label: 'Hinjawadi', value: 'Hinjawadi'},
    {label: 'Kasarwadi', value: 'Kasarwadi'},
    {label: 'Maan', value: 'Maan'},
    {label: 'Moshi', value: 'Moshi'},
    {label: 'Phugewadi', value: 'Phugewadi'},
    {label: 'Pimple Gurav', value: 'Pimple Gurav'},
    {label: 'Pimple Nilakh', value: 'Pimple Nilakh'},
    {label: 'Pimple Saudagar', value: 'Pimple Saudagar'},
    {label: 'Pimpri', value: 'Pimpri'},
    {label: 'Ravet', value: 'Ravet'},
    {label: 'Rahatani', value: 'Rahatani'},
    {label: 'Sangvi', value: 'Sangvi'},
    {label: 'Talawade', value: 'Talawade'},
    {label: 'Tathawade', value: 'Tathawade'},
    {label: 'Thergaon', value: 'Thergaon'},
    {label: 'Wakad', value: 'Wakad'},
  ];

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={'Select Location'}
        searchPlaceholder="Search..."
        value={cartListctx.location}
        onChange={item => {
          cartListctx.addLocation(item.value);
        }}
        renderLeftIcon={() => (
          <Icon
            style={styles.icon}
            color={Color.primary}
            name="location"
            size={20}
          />
        )}
      />
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  dropdown: {
    width: '95%',
    borderColor: Color.primary,
    borderRadius: 3,
    borderWidth: 2,
  },
});
