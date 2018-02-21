import * as CoinAPIUtil from '../util/coin_api_util';


export const RECEIVE_COIN_PRICE = 'RECEIVE_COIN_PRICE';

export const requestCoinPrice = () => (
  CoinAPIUtil.fetchCoinPrice(coin_tag).then(payload => dispatch(receiveCoin(payload)))
);

const receiveCoinPrice = (payload) => ({
  type: RECEIVE_COIN_PRICE,
  payload,
});
