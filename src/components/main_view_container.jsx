import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {requestCoinPrice} from '../actions/coin_actions';

// Components
import MainView from './main_view';


const mapStateToProps = (state, ownProps) => {
  const coinPrice = state.coin.amount ? parseFloat(state.coin.amount) : null;

  let coinPriceList = [];

  for (let i = 0; i < 16; i++) {
    // Initialize price list to have all zeros to enable animation when
    // graph loads data.
    coinPriceList = coinPriceList.concat(0);
  }

  return ({
    // Default to Bitcoin.
    coinTag: "BTC",
    coinName: "Bitcoin",

    // We define the state using the Coinbase API on the component view.
    // state.coins will be empty upon the initial render, so we must
    // make sure it doesn't error and set the default to 0 before the
    // state loads the coins.
    coinPrice: coinPrice,
    coinPriceList,
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestCoinPrice: (coin_tag) => dispatch(requestCoinPrice(coin_tag))
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainView));
