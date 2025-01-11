import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect, useCallback } from 'react';


const WalletContext = React.createContext({
  amount: 0,
  addAmount: (amount)=>{},
  onRecharge: (vendor_id,amount)=>{}
});



export const WalletContextProvider = (props) => {


  const [amount, setAmount] = useState(0);

    const addAmount = (amount) =>{
        setAmount(amount);
    }


    const onRecharge = (vendor_id,amt) => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify({
        vendor_id,
        amount:amt                                                                                  
      });
  
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
  
      console.log("Raw",raw);
  
      fetch(BaseUrl + "/transaction/recharge_wallet", requestOptions)
        .then((response) => response.json())
        .then((result) =>{
          if (result.status == 200) {
            setAmount(amount+amt)
            alert("Recharge Success")
            
          }else{
            alert("Something went wrong")
          }
          setIsVisible(false)
        })
        .catch((error) => console.log("error", error));
    };



  const contextValue = {
    amount,
    addAmount,
    onRecharge
  };

  useEffect(() => {
    console.log(contextValue)
  
  }, [contextValue])
  

  return (
    <WalletContext.Provider value={contextValue}>
      {props.children}
    </WalletContext.Provider>
  );
};

export default WalletContext;