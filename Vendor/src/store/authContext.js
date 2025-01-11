import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect, useCallback } from "react";

const AuthContext = React.createContext({
  token: "",
  user: { id: "", status: 0 },
  isLoggedIn: false,
  login: (token, id, status) => {},
  updateStatus: (status) => {},
  logout: () => {},
});

const retrieveStoredToken = async () => {
  try {
    const storedToken = await AsyncStorage.getItem("token");
    return {
      token: storedToken,
    };
  } catch (err) {
    console.log("erorororor", err);
  }
};

const retrieveId = async () => {
  const storedId = await AsyncStorage.getItem("id");
  return {
    id: storedId,
  };
};

export const AuthContextProvider = (props) => {
 

  let tokenData, idData;
  let initialToken,
    initialId = null;

    const [token, setToken] = useState(initialToken);
    const [userDetail, setUserDetail] = useState({ id: initialId, status: 0 });


  useEffect(() => {
    (async () => {
      tokenData = await retrieveStoredToken();
      idData = await retrieveId();

      if (tokenData) {
        initialToken = tokenData.token;
        setToken(initialToken)
      }
      if (idData) {
        initialId = idData.id;
        setUserDetail((prev) => ({ ...prev, id:initialId }));
      }
    })();
  }, []);

  console.log("tkid", tokenData);

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    setUserDetail({ id: null, status: 0 });
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("id");
  };

  const loginHandler = (token, id, status) => {
    setToken(token);
    setUserDetail((prev) => ({ ...prev, id, status }));
    AsyncStorage.setItem("token", token);
    AsyncStorage.setItem("id", id);
  };

  const updateStatus = (status) => {
    setUserDetail((prev) => ({ ...prev, status }));
  };

  const contextValue = {
    token: token,
    user: userDetail,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    updateStatus,
  };

  useEffect(() => {
    console.log(contextValue);
  }, [contextValue]);

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
