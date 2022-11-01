import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import Klinika from "../pages/Klinika/Klinika";
import Dorixona from "../pages/Dorixona/Dorixona";
import Kurslar from "../pages/Kurslar/Kurslar";

function App() {
   return (
      <>
         <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/klinika" element={<Klinika />} />
            <Route path="/dorixona" element={<Dorixona />} />
            <Route path="/kurslar" element={<Kurslar />} />
         </Routes>
      </>
   )
}

export default App