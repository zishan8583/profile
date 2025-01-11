import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/Entypo';
import Color from '../../constant/Color';
import BaseUrl from '../../constant/BaseUrl';

const SignUp = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [input, setInput] = useState({
    name: '',
    email_id: '',
    mobile_no: ''
  });

  const signUpHandler = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify(input);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    console.log('====================================');
    console.log(raw);
    console.log('====================================');

    fetch(BaseUrl + 'vendor/register', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log('====================================');
        console.log(result);
        console.log('====================================');
        if (result.error) {
          if (result.error.validation.email_id) {
            alert(result.error.validation.email_id);
          }
          if (result.error.validation.contact_number) {
            alert(result.error.validation.contact_number);
          }
        } else {
          
          navigation.navigate("Login",{mode:true, mobile: input.mobile_no});
        }
      })
      .catch(error => console.log('error', error));
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: Color.primary,
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{
          position: 'absolute',
          top: 20,
          left: 12,
          backgroundColor: 'white',
          borderRadius: 50,
          padding: 5,
        }}>
        <Icon name="chevron-left" color={Color.primary} size={25} />
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.signUp}>Create Account</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={input.name}
            onChangeText={name => setInput({...input, name})}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={input.email_id}
            onChangeText={email_id => setInput({...input, email_id})}
          />
          <TextInput
            style={styles.input}
            placeholder="Number"
            value={input.mobile_no}
            onChangeText={mobile_no => setInput({...input, mobile_no})}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={signUpHandler}>
          <Text
            style={{color: Color.primary, fontWeight: 'bold', fontSize: 18}}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  signUp: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.2,
    color: '#000',
    width: '80%',
    marginTop: 5,
    alignSelf: 'center',
  },
  inputContainer: {
    width: '80%',
    borderWidth: 0.5,
    borderColor: '#ccc',
    paddingVertical: 30,
    marginTop: 20,
    backgroundColor: 'white',
    elevation: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    flex: 1,
    textAlign: 'center',
    margin: 10,
    width: '30%',
    alignItems: 'center',
    paddingVertical: 10,
    elevation: 5,
  },
  error: {
    color: 'red',
  },
});
