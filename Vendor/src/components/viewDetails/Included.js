import { Image, StyleSheet, Text, View ,Dimensions } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Included = () => {

    
    let includeData = [1,2]

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Included</Text>
    {
        includeData.map((include,index)=>(
            <View style={styles.row}>
                {/* <View style={{flex:1,height:100, backgroundColor:'red'}}> */}
                    <Image style={styles.img} source={{uri:'https://thumbs.dreamstime.com/b/installation-service-fix-repair-maintenance-air-conditioner-indoor-unit-cryogenist-technican-worker-screwdriver-blue-152179350.jpg'}}/>
                {/* </View> */}
                <View style={styles.content}>
                    <Text style={styles.title}>Pre-service Cheque</Text>
                    <Text style={styles.body}>Comprehensive checkup (includeing gas check to identify repairs)</Text>
                </View>
            </View>
        ))
    }  
      
    
    </View>
  )
}

export default Included

const styles = StyleSheet.create({
    container:{
        width: '100%',
        paddingHorizontal:10,
        paddingVertical: 25,
        minHeight:200
    },
    header:{
        width: "100%",
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom:5
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical:5
    },
    img:{
        flex:1,
        height:"100%",
        aspectRatio:1,
        borderRadius:8,
        maxHeight:100, 
        backgroundColor:'gray',
        resizeMode: 'contain'
    },
    content:{
        // width:"75%",
        flex:3,
        height:'100%',
        marginLeft: 20 
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
        color:'black'
    }

})