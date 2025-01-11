import { Image, StyleSheet, Text, View ,Dimensions } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/Entypo';
import RatingChart from './RatingChart';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Reviews = () => {

    

  return (
    <View style={styles.container}>
      
      <Text style={styles.header}> Customer Reviews</Text>
      
      <View style={styles.ratingContainer}>
        <View style={styles.row}>
            <Icon  style={styles.rating}  name='star' />
            <Text style={styles.rating}>4.5</Text>
        </View>
 
        <Text style={styles.review}>184.84k</Text>
      
      
      {/* ratingChart */}


        <View style={{width:"100%"}}>
            <RatingChart/>
        </View>




      {/* ratingChart end */}
      
      
      </View>



      {/* comments */}

        <View style={styles.comments}>
            <View style={[styles.row,{justifyContent: 'space-between', width:"100%", alignItems: 'flex-start'}]}>
                <View style={[styles.row,{width:"90%"}]}> 

                    <Image style={styles.img} source={{uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}}/>
                    <View style={styles.content}>
                        <Text style={styles.rating}>John doe</Text>
                        <Text style={styles.date}>oct 2022</Text>
                    </View>
                
                </View>
              
                <View style={[styles.row, {width:'10%'}]}>
                    <Icon name='star' style={{color: 'black'}}/>
                    <Text style={{color: 'black', fontSize:18}}>5</Text>
                </View>

            </View>

            <View>
                <Text style={{marginTop:5,fontSize:15, color:'black'}}>
                Nicee Service gjkeg kfg fkg fgvjkg
                dfgwer gehhghg a a
                dgegefgeheh
                
                </Text>
            </View>

        </View>


    </View>
  )
}

export default Reviews

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
        width:60,
        aspectRatio:1,
        borderRadius:200, 
        backgroundColor:'gray',
        resizeMode: 'contain'
    },
    content:{
        width:"100%",
        height:'100%',
        marginHorizontal: 20 
    },
    
    rating:{
        fontWeight: 'bold',
        fontSize: 22,
        color:'black'
    },
    comments:{
        paddingVertical:10,
        paddingHorizontal:5
    },
    ratingContainer:{
        paddingVertical: 10,

    },
    review:{
        fontSize: 18
    }

})