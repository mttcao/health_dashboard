import React from 'react';
import './App.css';
// import EndPoints from './EndPoints'
// import {Ajax} from 'react-superagent';
var request = require('superagent-bluebird-promise');

// const EndPoints = [
//   { service: 'Billing', url: 'https://billing-sit.gem.myob.com/public/health' },
//   { service: 'Pricing Service', url: 'https://sit-pricing-service.core-services.myob.com/public/health' },
//   { service: 'Workfront Adaptor', url: 'https://sit-workfront-adapter.core-services.myob.com/public/health' },
// ];

const initialState = {
  apiStatus: 0,
  colour: "",
};

class PricingService extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  };

  checkStatus = () => {
    request.get('https://sit-pricing-service.core-services.myob.com/public/health')
      .then((result) => {
        // console.log(result.status)
        this.setState({
          apiStatus: result.status,
          colour: "success"
        })
      }).catch((error) => {
      // console.log(error.status)
      this.setState({
        apiStatus: error.status,
        colour: "failure"
      });
    })
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.checkStatus(),
      10000
    );
  }

  // componentDidMount() {
  //   this.timerID = setInterval(
  //     () => EndPoints.map((endpoint) => this.checkStatus(endpoint.url)),
  //     5000
  //   );
  // }

  render() {
    return (
      <div className="dashboard">
        Pricing Service: <span className={this.state.colour}>{this.state.apiStatus}</span>
      </div>
    );
  };
}

export default PricingService;