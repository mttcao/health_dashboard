var request = require('superagent-bluebird-promise');

export function getAll(){
    return request.get('https://sit-pricing-service.core-services.myob.com/public/health').promise();
}