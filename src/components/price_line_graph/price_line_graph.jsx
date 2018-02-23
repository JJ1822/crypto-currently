import React from 'react';
import {Component} from 'react';
import Chart from 'chart.js';
import {Line} from 'react-chartjs-2';

class PriceLineGraph extends Component {

// ==================================================
// Methods
// ==================================================
  getData() {
    const {prices} = this.props;

    return {
      // TODO: This should update with minutes.
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Bitcoin Price',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,

          // TODO: This should have prices.
          data: prices,
        }
      ]
    };
  };

// ==================================================
// Render
// ==================================================
  render() {
    return (
      <div>
        <Line data={this.getData()} />
      </div>

    );
  }

}

export default PriceLineGraph;
