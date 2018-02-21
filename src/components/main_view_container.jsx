import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {requestCoinPrice} from '../actions/coin_actions';

// Components
import MainView from './main_view';


const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestCoinPrice: (coin_tag) => dispatch(requestCoinPrice(coin_tag))
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainView));
