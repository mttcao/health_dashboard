import './App.css';

const EndPoints = [
  { service: 'Billing', url: 'https://billing-sit.gem.myob.com/public/health' },
  { service: 'Pricing Service', url: 'https://sit-pricing-service.core-services.myob.com/public/health' },
  { service: 'Workfront Adaptor', url: 'https://sit-workfront-adapter.core-services.myob.com/public/health' },

];

//   return (
//     <div>
//       <App urlProps={EndPoints} />
//     </div>
//   );

export default EndPoints;
