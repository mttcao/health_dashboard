import React, { Component } from 'react';
// import {Ajax} from 'react-superagent';
import { getAll } from './APIService';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {apiStatus: 0};
    }
    render() {
        return (
            <div>
                "test:" {this.state.apiStatus}
            </div>
        );
    }
}

function test() {
    getAll().then(function (res) {
        this.setState({apiStatus: res.status})
    });
}

export default App;
