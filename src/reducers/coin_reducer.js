import {merge} from 'lodash';

import {RECEIVE_COIN_PRICE, RECEIVE_PAST_COIN_PRICES} from '../actions/coin_actions';


const coinReducer = (state = {}, action) => {
  Object.freeze(state);
  const oldState = state;

  switch(action.type) {
    case RECEIVE_PAST_COIN_PRICES:
      let prices = [];
      for (let i = 0; i < 24; i++) {
        prices.push(action.payload.Data[i].close);
      }
      return merge({}, oldState, {["prices"]: prices});
    case RECEIVE_COIN_PRICE:
      return merge({}, oldState, action.payload.data);
    default:
      return state;
  }
};

export default coinReducer;
