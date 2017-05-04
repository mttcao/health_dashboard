import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PricingService from "./PricingService";
import Workfront from "./Workfront";

ReactDOM.render(
  <div>
    <h1>Health Dashboard</h1>
    <App />
    <PricingService/>
    <Workfront/>
  </div>,
  document.getElementById('root')
);
