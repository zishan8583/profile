import React, { useState, useEffect, useCallback } from 'react';


const AuthContext = React.createContext({
  token: '',
  id: null,
  name:'',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  modelHandler: (pass)=>{},
  loginModel: false
});



const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');

  return {
    token: storedToken
  };
};
const retrieveId = () => {
  const id = localStorage.getItem('id');

  return {
    id: id
  };
};

export const AuthContextProvider = (props) => {

  let tokenData, idData, nameData

  const [token, setToken] = useState();
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [loginModel, setLoginModel] = useState(false);

  useEffect(() => {
    (async() => {
      tokenData = retrieveStoredToken();
      idData = retrieveId();
      nameData =  localStorage.getItem("name")

      if (tokenData) {
        
        setToken(tokenData.token)
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
    setId(null)
    setName(null)
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('name');

  }, []);

  const loginHandler = (token,id,name) => {
    setToken(token);
    setId(id);
    setName(name);

    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);

  };

  const modelHandler = (pass) =>{
    setLoginModel(pass);
  }


  const contextValue = {
    token: token,
    id:id,
    name: name,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    modelHandler,
    loginModel
  };

  useEffect(() => {
    console.log(contextValue)
  
  }, [contextValue])
  

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;