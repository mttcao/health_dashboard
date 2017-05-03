import React, {Component} from 'react';
// import {Ajax} from 'react-superagent';
import {getAll} from './APIService';
import './App.css';

const initialState = {
  apiStatus: 0,

};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  };

  test = () => {
    var self = this;
    getAll().then((result) => {
      console.log(result.status)
      self.setState({
        apiStatus: result.status
      })
    }).catch((error) => {
      console.log(error.status)
      self.setState({
        apiStatus: error.status
      });
    })
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.test(),
      10000
    );
  }

  render() {
    return (
      <div>
        "Test status:" {this.state.apiStatus}
      </div>
    );
  };
}

export default App;