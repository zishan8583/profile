import {useNavigation} from '@react-navigation/native';

// function ServiceNavHandler(data,onPress){
//     const navigation = useNavigation();
//     onPress();

//     return(
//         // navigation.navigate('servicing',{
//         // type: data.type})
//         console.log('hii')
//     )

//     // console.log('clickesad',onPress);

// };

const ServiceNavHandler = (data, onPress, navigation) => {
  onPress();

  return navigation.navigate('servicing', {type: data.type, title: 'Zish'});
};

export default ServiceNavHandler;
