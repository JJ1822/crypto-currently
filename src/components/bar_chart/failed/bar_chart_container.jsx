import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// Components
// import BarChart from './bar_chart';


const mapStateToProps = (state, ownProps) => {
  const data = [
    { "x": "Apple", "y": 10 },
    { "x": "Banana", "y": 15 },
    { "x": "Strawberry", "y": 20 },
    { "x": "Lemon", "y": 25 },
    { "x": "Cherry", "y": 30 },
    { "x": "Peach", "y": 35 }
  ];
  debugger

  return {
    data
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(BarChart));
