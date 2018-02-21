import {combineReducers} from 'redux';
import CoinReducer from './coin_reducer';

const RootReducer = combineReducers({
  coins: CoinReducer,
});


export default RootReducer;
