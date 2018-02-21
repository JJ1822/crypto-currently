import React from 'react';
import {Component} from 'react';

// Components
import MainHeader from './main_header';
// import CoinPriceGraph from './coin_price_graph';

// Styles
import '../styles/main-view-styles.css';


class MainView extends Component {

// ==================================================
// Render
// ==================================================
  render() {
    return (
      <div className="main-view-container">
        <MainHeader />
        <div className="main-view-content">
          <div className="main-view-content">
            <div className="main-sentiment-chart">
            </div>
          </div>
          <div className="twitter-feed-sidebar">
          </div>
        </div>
        <div className="main-view-footer">
        </div>
      </div>
    );
  }

}


export default MainView;
