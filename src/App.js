import React from 'react';
import './App.css';
// import {Ajax} from 'react-superagent';
var request = require('superagent-bluebird-promise');

const initialState = {
  apiStatus: 0,
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  };

  checkStatus = () => {
    request.get('https://sit-pricing-service.core-services.myob.com/public/health11')
    .then((result) => {
      console.log(result.status)
      this.setState({
        apiStatus: result.status
      })
    }).catch((error) => {
      console.log(error.status)
      this.setState({
        apiStatus: error.status
      });
    })
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.checkStatus(),
      5000
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