import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import Klinika from "../pages/Klinika/Klinika";

function App(){
   return(
    <>
      <Routes>
         <Route path="/about" element={<About/>}/>
         <Route path="/klinika" element={<Klinika/>}/>
      </Routes>
    </>
   )
}

export default App