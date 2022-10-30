import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from "./components/App/App";
import Klinika from "./components/Pages/Klinika/Klinika";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    {/* <App /> */}
    <Klinika />
  </React.Fragment>
);

