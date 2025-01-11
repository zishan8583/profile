import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import  Icon  from 'react-native-vector-icons/Entypo'

const CounterButton = ({getCounter,onAdd}) => {
  
    const [counter, setCounter] = useState(0);
  
    const handleCounter = (e) =>{
        
        if (e == "i"){ 
            setCounter(counter +1);
            getCounter(counter+1)
        }
        else {
            if(counter == 0){
                setCounter(0);
                getCounter(0)
            }
            else{
                setCounter(counter-1);
                getCounter(counter-1)
            }
        } 
        

    }

   
    
    return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Icon name='plus' color={'green'} onPress={()=>{handleCounter('i'); onAdd()}} />
        <Text style={styles.counter}>{counter}</Text>
        <Icon name='minus' color={'red'} onPress={()=>{handleCounter('d'); }}/>
      </View>
    </View>
  )
}

export default CounterButton

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    button:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderWidth:1,
        borderColor: 'blue',
        borderRadius:5,
        width:"50%"
    }
})