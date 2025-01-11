
import React,{createContext, useState} from 'react'

export const CartContext = createContext({
    name:[],
    totalPrice:0,
    addItem:(name,price)=>{},
    removeItem:(name, price)=>{},
    resetItem:()=>{},
});


const CartProvider = ({ children }) => {
    const [cartName, setCartName] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addItem = (name,price) => {
      
        setCartName((prev)=>[...prev,{name,price}])
        setTotalPrice(totalPrice+price);
        
    }
        
    
    const removeItem = (name,price) =>{
        setCartName((prev)=> prev.filter((item)=>item.name !== name) )
        setTotalPrice(totalPrice-price);
    }

    const resetItem = () =>{
      setCartName([]);
      setTotalPrice(0);

    }

    const value = {
        name: cartName,
        addItem: addItem,
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

  export default CartProvider;