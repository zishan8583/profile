import { StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'

const Profile = () => {
    
    const [data, setData] = useState({name:'',email:'',number:''})
  
  return (
    <View>
        <TextInput 
        placeholder='Name' 
        style={styles.input}
        value={data.name}
        onChange={(e)=>console.log(e)}
        />
        
        <TextInput 
        placeholder='Email Address' 
        style={styles.input} 
        keyboardType='email-address'
        value={data.email}
        />
        
        <TextInput 
        placeholder='Number' 
        style={styles.input} 
        keyboardType='number-pad'
        value={data.email}
        />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    input:{
        borderBottomWidth: 0.2,
        marginHorizontal: 8,
        borderBottomColor: '#ccc'
    }
})