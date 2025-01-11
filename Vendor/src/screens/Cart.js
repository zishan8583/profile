import { StyleSheet,ScrollView, Text, View, TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { CartContext } from '../store/CartContext'
import Color from '../constant/Color'

const Cart = () => {

    const cartListctx = useContext(CartContext);

  return (
    <ScrollView  style={styles.background} contentContainerStyle={{flexGrow:1}}>
        <View style={{marginVertical:20, alignSelf:'center', width:'90%',}}>
        {/* list */}
       

       {
        
        cartListctx.name.map((list,index)=>(
            <View style={styles.box} key={index}>
            <View style={[styles.row,styles.content]}>
                <Icon name='trash' onPress={()=>{cartListctx.removeItem(list.name,list.price)}} size={22} color='white'/>
                <View style={[styles.row,{justifyContent: 'space-between', width:"90%"}]}>
                    <View style={{width:"90%"}}>
                        <Text style={styles.title}>{list.name}</Text>
                    </View>
                    <Text style={styles.price}>{list.price}</Text>
                </View>
            </View>
            </View>
        ))


       }
      

        </View>

        {/* payment summary */}
        
        <View style={styles.seprator}/>
        
        
        <View style={styles.listContainer}>      

            <Text style={styles.header}>Payment Summary</Text>

            <View style={[styles.row]}>
                <Text style={styles.bill}>Item Total</Text>
                <Text style={styles.bill}>${cartListctx.totalPrice}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.bill}>Taxes and Fee</Text>
                <Text style={styles.bill}>$0</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.bill}>Item Discount</Text>
                <Text style={styles.bill}>$0</Text>
            </View>

            <View style={{width:"100%",borderWidth:0.2}}/>

            <View style={styles.row}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.total}>${cartListctx.totalPrice}</Text>
            </View>

        </View>


            <TouchableOpacity style={styles.button} 
            onPress={()=>{
                    cartListctx.resetItem();
                    alert("Booked Succesfully")
            }}>
                <Text style={{color:'white', fontSize:18, fontWeight: 'bold'}}>Confirm Booking</Text>
            </TouchableOpacity>


 

    </ScrollView>
  )
}

export default Cart

const styles = StyleSheet.create({
    background:{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    listContainer:{
        paddingHorizontal:5,
        paddingVertical:10,
      
    },
  
    bill:{
        color: 'black',
        marginVertical: 15,
        fontSize:18
    },
    
    seprator:{
        height: 8,
        width: '100%',
        backgroundColor: '#ccc'
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    total:{
       
        fontWeight: 'bold',
        color:'black',
        fontSize: 20,
        marginTop: 20
    },
    header:{
        width: "100%",
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom:5
    },
    button:{
        backgroundColor: Color.primary,
        width: 150,
        paddingVertical:10,
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        position: 'absolute',
        bottom: 10
    },
    box:{
        width:"90%",  
        marginTop:20,
        alignSelf: 'center',
        borderRadius:10,
        elevation:3,
        backgroundColor: Color.primary,
        paddingHorizontal:15,
        paddingVertical: 5
      },
      title:{
        fontWeight: 'bold',
        color: 'white',
        fontSize:20,
        marginLeft:5
    },
    price:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    content:{
        width:"100%"
    }


})