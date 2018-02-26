import * as CoinAPIUtil from '../util/coin_api_util';


export const RECEIVE_COIN_PRICE = 'RECEIVE_COIN_PRICE';
export const RECEIVE_PAST_COIN_PRICES = 'RECEIVE_PAST_COIN_PRICES';

const receiveCoinPrice = (payload) => ({
  type: RECEIVE_COIN_PRICE,
  payload,
});

const receivePastCoinPrices = (payload) => ({
  type: RECEIVE_PAST_COIN_PRICES,
  payload,
});

export const requestCoinPrice = (coin_tag) => dispatch => {
  return (
  CoinAPIUtil.fetchCoinPrice(coin_tag).then(payload => dispatch(receiveCoinPrice(payload)))
)};

export const requestPastCoinPrices = () => dispatch => {
  return (
  CoinAPIUtil.fetchPastCoinPrices().then(payload => dispatch(receivePastCoinPrices(payload)))
)};
