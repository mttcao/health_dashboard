import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EndPoints from "./EndPoints";

ReactDOM.render(
  <div>
    <h1>Health Dashboard</h1>
    {EndPoints.map((endpoint, index)=> <App key={ index } serviceProps={ endpoint.serviceProps } urlProps={ endpoint.urlProps } />)}

  </div>,
  document.getElementById('root')
);
