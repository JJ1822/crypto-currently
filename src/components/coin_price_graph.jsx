// import React from 'react';
// import {Component} from 'react';
// import * as CoinAPIUtil from '../util/coin_api_util';
//
// // Components
// import CoinPriceComponent from './coin_price_component';
//
// // Styles
// import '../styles/main-view-styles.css';
//
//
// export const requestCoin = () => (
//   CoinAPIUtil.fetchCoin(coin_tag).then(payload => dispatch(receiveCoin(payload)))
// )
//
// class CoinPriceGraph extends Component {
//
// // ==================================================
// // Render
// // ==================================================
//   render() {
//     const prices = pricesData && pricesData.map((price) => {
//       // go through all data and return components keyed by id
//       return (<CoinPriceComponent key={price.id} data={price} />);
//     });
//
//     return (
//       <div className="coin-price-graph">
//         <svg>
//           <g className="graph">
//            {}
//           </g>
//         </svg>
//       </div>
//     );
//   }
//
// }
//
//
// export default CoinPriceGraph;
