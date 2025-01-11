import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect, useCallback } from 'react';


const AuthContext = React.createContext({
  token: '',
  id: null,
  name: null,
  isLoggedIn: false,
  login: (token,id, name) => {},
  logout: () => {},
});



const retrieveStoredToken = async() => {
  const storedToken = await AsyncStorage.getItem('token');

  return {
    token: storedToken
  };
};
const retrieveId = async () => {
  const storedId = await AsyncStorage.getItem("id");
  return {
    id: storedId,
  };
};

export const AuthContextProvider = (props) => {
  
  let tokenData, idData, nameData

  const [token, setToken] = useState();
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);

  

  useEffect(() => {
    (async() => {
      tokenData = await retrieveStoredToken();
      idData = await retrieveId();
      nameData = await AsyncStorage.getItem("name")

      if (tokenData) {
        initialToken = tokenData.token;
        setToken(initialToken)
      }
      if (idData) {
       
        setId( idData.id)
      }
      if (nameData) {
        setName(nameData)
      }
    })();
  }, []);
 

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    setId(null);
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('id');
    AsyncStorage.removeItem('name');
    console.log(token);

  }, []);

  const loginHandler = (token,id,name) => {
    setToken(token);
    setId(id);
    setName(name);
    AsyncStorage.setItem('token', token);
    AsyncStorage.setItem('id', id);
    AsyncStorage.setItem('name', name);
  };


  const contextValue = {
    token: token,
    id,
    name,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  useEffect(() => {
    console.log("contextValue",contextValue)
  
  }, [contextValue])
  

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;