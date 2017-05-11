import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EndPoints from "./EndPoints";

ReactDOM.render(
  <div>
    <h1>Health Dashboard</h1>
    <App serviceProps={'Billing'} urlProps={EndPoints['billing']} />
    <App serviceProps={'Pricing Service'} urlProps={EndPoints['pricingService']} />
    <App serviceProps={'Workfront Adaptor'} urlProps={EndPoints['workfrontAdaptor']} />
  </div>,
  document.getElementById('root')
);
