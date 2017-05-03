import React, { Component } from 'react';
import './App.css';
import {Ajax} from 'react-superagent';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            display_string: String("test")
        };
    }

    render() {
        return (
            <div>
                <Ajax url='https://sit-pricing-service.core-services.myob.com/public/health' method='get' >{
                    ({error, response, done}) => !done ?
                        <div></div> :
                        <div>{JSON.stringify(response.status)}</div>
                }</Ajax>
            </div>
        );
    }
}

export default App;
