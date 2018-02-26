import {combineReducers} from 'redux';
import CoinReducer from './coin_reducer';

const RootReducer = combineReducers({
  coin: CoinReducer,
});


export default RootReducer;
