import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import  Icon  from 'react-native-vector-icons/FontAwesome5'

const Faq = () => {

    const [showAnswer, setShowAnswer] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>FAQ</Text>
    
    
      <View style={styles.accordation}>
      <View>
      <Text style={styles.question}>
            Will the proffesional bring the tolls needed for the service?
        </Text>
       { showAnswer && <Text style={styles.answer}>
            dvhfguhrhrt erogjk er pgjefgoi;egeohggfgdfgefgiejgeoigr ewowerio weroieohgwerog
        </Text>}
      </View>
        
        <Icon size={20}
            onPress={()=>setShowAnswer(!showAnswer)} 
            color={"black"} 
            style={{marginLeft:2}}
            name={showAnswer ? 'caret-up' : 'caret-down'}                
            />
      </View>
    
    
    
    </View>
  )
}

export default Faq

const styles = StyleSheet.create({
    container:{
        width: '100%',
        paddingHorizontal:10,
        paddingVertical: 25,
    },
    header:{
        width: "100%",
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom:5
    },
    accordation:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        borderBottomWidth:1,
        paddingVertical:8
    },
    question:{
        marginRight:8,
        color:'black',
        fontSize:15
    },
    answer:{
        marginTop:10,
        marginLeft:5
    }

})