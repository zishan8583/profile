import React,{useState,useEffect} from 'react';

const CartContext = React.createContext({
  items: [],
  totalPrice:0,
  location: 'kharadi',
  addItem:(service)=>{},
  addLocation:(location)=>{},
  removeItem:(name, price)=>{},
  resetItem:()=>{},
});

  export const CartContextProvider = ({ children }) => {
    const [cartName, setCartName] = useState()
    const [totalPrice, setTotalPrice] = useState(0)
    const [location, setLocation] = useState('Kharadi')

    const addItem = (service) => {

        let cart = cartName || []
        
        if(cart.some(e => e.id === service.id)){
            return
        }

        cart.push(service)
        setCartName(cart)
        setTotalPrice(totalPrice + parseInt(service.service_rate));
        
      }

    const addLocation = (l) =>{
      setLocation(l)
    }
    
      // const addItem = (name,price) => {
      
      //   setCartName((prev)=>[...prev,{name,price}])
      //   setTotalPrice(totalPrice+price);
        
      // }
        
    
    const removeItem = (id,price) =>{
        console.log("aaaa",id);
        setCartName((prev)=> prev.filter((item)=>item.id !== id) )
        setTotalPrice(totalPrice-price);
    }

    const resetItem = () =>{
      setCartName([]);
      setTotalPrice(0);

    }

    const value = {
        items: cartName,
        addItem: addItem,
        location,
        addLocation,
        removeItem: removeItem,
        totalPrice: totalPrice,
        resetItem: resetItem,
    }

    return (
      <CartContext.Provider value={value}>
        {children}
      </CartContext.Provider>
    );
  };








export default CartContext;