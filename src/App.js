import { BrowserRouter, Route } from "react-router-dom";
import "./style/styles.css";
import Game from "./navigationPage/Game";
import Navbar from "./components/Navbar";
import RouterApp from "./components/RouterApp";
import { useState, useEffect } from "react";
import { AuthContext } from "./components/context";

export default function App(){
  const [isAuth, setIsAuth] = useState(false)
  useEffect(() => {
   if(localStorage.getItem('auth')){
     setIsAuth(true)
   }
  }, [])
  return(
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <BrowserRouter>
          <Navbar />
          <RouterApp />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}