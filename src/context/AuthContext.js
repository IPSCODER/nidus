import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../utils/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData,setUserData] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
    ( async () =>  {
try {
  const response = await axios.get(url+"/people");
  setUserData(response.data?.results);
}catch(err){
  console.log(err);
}
    })()

  }, []);


  const login = (userCredential) => {
    if(userData.find((item,index) => item.name == userCredential.name) && userData.find((item) => item.birth_year == userCredential.password ) ){
      setUser(userCredential);
      localStorage.setItem("user", userCredential.name);
      navigate("/"); // Redirect to Home after login
    }else{
      console.log("error")
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login"); // Redirect to Login after logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
