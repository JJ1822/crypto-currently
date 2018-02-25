import React from 'react';
import {Component} from 'react';

// Components
import MainHeader from './main_header';
import BasicFeed from './twitter_feed/basic_feed';
import BarChart from './bar_chart/bar_chart';
import DoughnutChart from './doughnut/doughnut_chart';
import TweetMap from './map/map';
import SingleTweet from './single_tweet/single_tweet';
import PriceLineGraph from './price_line_graph/price_line_graph';
// import CoinPriceGraph from './coin_price_graph';

// Styles
import '../styles/main-view-styles.css';


class MainView extends Component {

// ==================================================
// Initialize
// ==================================================
constructor(props) {
  super(props);
  this.props.requestCoinPrice("BTC");

  this.state = ({
    // Default value is defined in MainViewContainer.
    coinTag: this.props.coinTag,
    coinName: this.props.coinName,
    coinPrice: this.props.coinPrice,
    coinPriceList: this.props.coinPriceList,
  });

  this.updateCoins = this.updateCoins.bind(this);
}

// ==================================================
// Lifecycle
// ==================================================
componentWillMount() {
  this.setState({
    // Default value is defined in MainViewContainer.
    intervalTime: 4000,
    coinName: this.props.coinName,
    coinTag: this.props.coinTag,
    coinPrice: this.props.coinPrice,
    coinPriceList: this.props.coinPriceList,
  });
}

componentDidMount() {
  this.coinPriceUpdate = setInterval(
    () => this.updateCoins(),
    this.state.intervalTime,
  );
}

componentWillUnmount() {
  clearInterval(this.coinPriceUpdate);
}

// ==================================================
// Methods
// ==================================================
updatePriceList(newPrice) {
  if (this.state.coinPriceList.every((x) => (x === 0))) {
    let priceList = []
    // Initialize with 16 points that all just show price at the time the
    // component was loaded; this will animate graph upwards.
    for (let i = 0; i < 16; i++) {
      priceList = priceList.concat(newPrice);
    }

    return priceList;

  } else {
    return this.state.coinPriceList.slice(1).concat(newPrice);
  }
}

updateCoins() {
  this.props.requestCoinPrice("BTC");

  const newPrice = this.props.coinPrice;

  this.setState({
    coinPrice: newPrice,
    coinPriceList: this.updatePriceList(newPrice),
  });
}

// ==================================================
// Event Handlers
// ==================================================
handleGetBitcoin() {
  this.props.requestCoinPrice("BTC");
}


// ==================================================
// Render
// ==================================================
  renderCoinPriceGraph() {
    const {
      intervalTime,
      coinName,
      coinTag,
      coinPrice,
      coinPriceList,
    } = this.state;

    return (
      <div className="price-graph-content">
        <div className="price-graph-header">
          {/*<h1 className="coin-name">{coinName}</h1>*/}
          <h1 className="coin-tag">{coinTag}</h1>
          <h1 className="coin-price">{coinPrice ? `$${coinPrice}` : "...loading"}</h1>
        </div>
        <PriceLineGraph
          intervalTime={intervalTime}
          prices={coinPriceList}
        />
      </div>
    );
  }

  renderSentimentPieChart() {
    // TODO: Create pie chart for sentiment.
    // FIXME: THIS IS ACTUALLY THE BAR CHART
    return (
      <div className="sentiment-chart-content">
        <DoughnutChart/>
      </div>);
  }

  renderSentimentBarChart() {
    // TODO: Create bar chart DIV & CSS.
    // <div className="sentiment-bar-chart-content"/>
    return (

      <div className="sentiment-bar-chart-content">
        <BarChart />
      </div>);
  }

  renderHeatmap() {
    // TODO: Create heatmap for tweet locations.
    return (
      <div className="heat-map-content" >
        <TweetMap/>
      </div>
      )
  }

  renderTwitterFeed() {
    return <BasicFeed/>;
  }

  renderSingleTweet() {
    return <SingleTweet/>;
  }

  render() {
    const {coinName, coinTag, coinPrice} = this.state;
    // console.log(this.props);
    // console.log(this.state);

    return (
      <div className="main-view-container">
        <MainHeader />
        <div className="main-view-content">
          <div className="main-view-sentiment">
            {this.renderSentimentBarChart()}
            {this.renderSingleTweet()}
            {this.renderSentimentPieChart()}
          </div>

          <div id="main-view-price">
            {this.renderCoinPriceGraph()}
          </div>

          <div id='main-view-map-and-feed'>
            <div id='main-view-map'>
            {this.renderHeatmap()}
            </div>
            {this.renderTwitterFeed()}
          </div>




        </div>
        <div className="main-view-footer">
        </div>
      </div>
    );
  }

}


export default MainView;
