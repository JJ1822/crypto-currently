import * as CoinAPIUtil from '../util/coin_api_util';


export const RECEIVE_COIN_PRICE = 'RECEIVE_COIN_PRICE';

const receiveCoinPrice = (payload) => ({
  type: RECEIVE_COIN_PRICE,
  payload,
});

export const requestCoinPrice = (coin_tag) => dispatch => {
  return (
  CoinAPIUtil.fetchCoinPrice(coin_tag).then(payload => dispatch(receiveCoinPrice(payload)))
)};
