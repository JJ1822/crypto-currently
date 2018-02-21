import {merge} from 'lodash';

import {RECEIVE_COIN_PRICE} from '../actions/coin_actions';


const coinReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_COIN_PRICE:
      return merge({}, action.payload.data);
    default:
      return state;
  }
};

export default coinReducer;
