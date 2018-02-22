import React from 'react';
import {Component} from 'react';

// Components
import MainHeader from './main_header';
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
  };
}

componentWillMount() {
  this.setState({
    // Default value is defined in MainViewContainer.
    coinName: this.props.coinName,
    coinTag: this.props.coinTag,
    coinPrice: this.props.coinPrice,
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
updateCoins() {
  this.props.requestCoinPrice("BTC");

  this.setState({
    coinPrice: this.props.coinPrice,
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
      </div>
    );
  }

  renderSentimentPieChart() {
    // TODO: Create pie chart for sentiment.
    return <div className="sentiment-chart-content" />;
  }

  renderHeatmap() {
    // TODO: Create heatmap for tweet locations.
    return <div className="heat-map-content" />;
  }

  renderTwitterFeed() {
    // TODO: Create live feed for tweets.
    return <div className="twitter-feed-content" />;
  }

  render() {
    const {coinName, coinTag, coinPrice} = this.state;
    console.log(this.props);
    console.log(this.state);

    return (
      <div className="main-view-container">
        <MainHeader />
        <div className="main-view-content">
          <div className="main-view-content-row">
            {this.renderCoinPriceGraph()}
            {this.renderSentimentPieChart()}
          </div>
          <div className="main-view-content-row">
            {this.renderHeatmap()}
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
