import React from 'react';
import {Component} from 'react';
import Chart from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

class DoughnutChart extends Component {

  // ==================================================
  // Constructor
  // ==================================================
    constructor(props){
      super(props);
      // this.dataVals = [30, 50, 20];
      // this.counter = 0;
      this.state = {
        response: [{
          anger: 0.023926,
          joy: 0.683256,
          disgust: 0.056478,
          fear: 0.142307,
          sadness: 0.118776 }],
        data: {
          labels: ["Negative", "Positive", "Neutral"],
          datasets: [{
              data: [9, 75, 16],
              backgroundColor: [
                  'rgba(255, 99, 132, 1.0)',
                  'rgba(54, 162, 235, 1.0)',
                  'rgba(255, 206, 86, 1.0)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 3
          }]
        }
      }

      this.options = {
        cutoutPercentage: 0,
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true,
                  max: 100
              }
          }]
        }
      }
    }

// ==================================================
// Agregate Emotions:
// ==================================================
  agregateEmotions(watsonResponseObject){

  }

// ==================================================
// Render
// ==================================================
  render() {
    return (
      <div>
        <div className="chart-title">
        </div>

        <Doughnut data={this.state.data} />
      </div>
    );
  }

}


export default DoughnutChart;
// <h1>Emotional Distribution</h1>
