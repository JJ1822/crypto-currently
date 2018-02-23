import React from 'react';
import {Component} from 'react';

// Components
import MainHeader from './main_header';
import BasicFeed from './twitter_feed/basic_feed';
import BarChart from './bar_chart/bar_chart';
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
    coinPriceList: [],
  });

  this.updateCoins = this.updateCoins.bind(this);
}

// ==================================================
// Lifecycle
// ==================================================
getInitialState() {
  return {
    coinName: this.props.coinName,
    coinTag: this.props.coinTag,
    coinPrice: this.props.coinPrice,
    coinPriceList: [],
  };
}

componentWillMount() {
  this.setState({
    // Default value is defined in MainViewContainer.
    coinName: this.props.coinName,
    coinTag: this.props.coinTag,
    coinPrice: this.props.coinPrice,
    coinPriceList: [],
  });
}

componentDidMount() {
  console.log("didmount", this.props);
  this.coinPriceUpdate = setInterval(
    () => this.updateCoins(),
    3000
  );
}

componentWillUnmount() {
  clearInterval(this.coinPriceUpdate);
}

// ==================================================
// Methods
// ==================================================
updatePriceList(coinPrice) {
  if (this.state.coinPriceList === []) {
    return ([
      coinPrice,
      coinPrice,
      coinPrice,
      coinPrice,
      coinPrice,
      coinPrice,
      coinPrice,
      coinPrice,
    ]);
  } else {
    return this.state.coinPriceList
  }
}

updateCoins() {
  this.props.requestCoinPrice("BTC");

  this.setState({
    coinPrice: this.props.coinPrice,
    coinPriceList: this.updatePriceList(this.props.coinPrice),
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
    const {coinName, coinTag, coinPrice} = this.state;

    // TODO: Create graph for coin price.
    return (
      <div className="price-graph-content">
        <h1 className="price-graph-title">{coinName}</h1>
        <p className="price-graph-tag">{coinTag}</p>
        <p className="price-graph-value">{coinPrice}</p>
        <PriceLineGraph

        />
      </div>
    );
  }

  renderSentimentPieChart() {
    // TODO: Create pie chart for sentiment.
    // FIXME: THIS IS ACTUALLY THE BAR CHART
    return (
      <div className="sentiment-chart-content">
        <BarChart />
      </div>);
  }

  renderSentimentBarChart() {
    // TODO: Create bar chart DIV & CSS.
    // <div className="sentiment-chart-bar-content"/>

  }

  renderHeatmap() {
    // TODO: Create heatmap for tweet locations.
    return <div className="heat-map-content" />;
  }

  renderTwitterFeed() {
    return <BasicFeed/>;
  }

  render() {
    const {coinName, coinTag, coinPrice} = this.state;
    console.log(this.props);
    console.log(this.state);

    return (
      <div className="main-view-container">
        <MainHeader />
        <div className="main-view-content">
          <div className="main-view-content-column">
            {this.renderCoinPriceGraph()}
            {this.renderHeatmap()}
          </div>
          <div className="main-view-content-column">
            {this.renderSentimentPieChart()}
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
