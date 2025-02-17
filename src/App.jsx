import {  Routes, Route } from "react-router-dom";
import Theme from "./theme/Theme";
import { useAuth } from "./context/AuthContext";
import "./App.css";
import React from "react";
import LoadingComponent from "./components/loading/Loading";

const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));


const LazyComponent = ({children}) =>{
  return (
    <>
      <React.Suspense fallback={<LoadingComponent/>}>
        {children}
      </React.Suspense>
    </>
  );
}


function App() {
  const {user} = useAuth()

  return (
    <>
    <>
        <Routes>  
          <Route path="/" element={<LazyComponent children={<Theme />} />} >
          <Route index path="/" element={<Home />} />
          </Route>
        <Route path="/login" element={<LazyComponent children={user ? <Theme/> : <Login /> } />} />
        </Routes>
    </>
      </>
  );
}

export default App;
