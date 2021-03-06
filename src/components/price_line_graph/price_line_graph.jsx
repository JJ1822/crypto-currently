import React from 'react';
import {Component} from 'react';
import Chart from 'chart.js';
import {Line} from 'react-chartjs-2';

class PriceLineGraph extends Component {

// ==================================================
// Methods
// ==================================================
  getLabels() {
    const {intervalTime} = this.props;

    let labels = [];
    for (let i = 28; i >= 0; i--) {
      labels.push(`-${(parseFloat(intervalTime)/1000) + (i)}m`)
    }

    return labels.concat('now')
  }

  getData() {
    const {prices} = this.props;


    return {
      // TODO: This should update with minutes.
      labels: this.getLabels(),
      datasets: [
        {
          label: 'Bitcoin Price',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.1)',
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
          data: prices,
        }
      ]
    };
  };

  getOptions() {
    const {prices} = this.props;

    return {
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          gridLines: {
              display:false
          },
          ticks: {
            suggestedMin: (Math.min.apply(Math, prices) - 10),
            suggestedMax: (Math.max.apply(Math, prices) + 10),
          }
        }],
        xAxes: [{
          gridLines: {
              display:false
          }
        }]
      }
    };
  }

// ==================================================
// Render
// ==================================================
  render() {
    return (
      <div >
        <Line
          data={this.getData()}
          options={this.getOptions()}
        />
      </div>

    );
  }

}

export default PriceLineGraph;
