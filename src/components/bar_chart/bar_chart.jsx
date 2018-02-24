import React from 'react';
import {Component} from 'react';
import Chart from 'chart.js';
import {Bar} from 'react-chartjs-2';

class BarChart extends Component {
// ==================================================
// Constructor
// ==================================================
  constructor(props){
    super(props);
    this.dataVals = [0, 0, 0, 0, 0];

    this.state = {
      data: {
        labels: ["Anger", "Joy", "Disgust", "Fear", "Sadness"],
        datasets: [{
            data: this.dataVals,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 3
        }]
      }
    }

    this.options = {
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true,
                max: 100
            }
        }]
      }
    }

    Chart.defaults.global.legend.display = false;
  }

// ==================================================
// NormalizeInput
// ==================================================

  normalizeInput(watsonResponseObject) {
    this.state.data.datasets[0].data[0] = Math.floor(watsonResponseObject.anger * 100);
    this.state.data.datasets[0].data[1] = Math.floor(watsonResponseObject.disgust * 100);
    this.state.data.datasets[0].data[2] = Math.floor(watsonResponseObject.fear * 100);
    this.state.data.datasets[0].data[3] = Math.floor(watsonResponseObject.joy * 100);
    this.state.data.datasets[0].data[4] = Math.floor(watsonResponseObject.sadness * 100);
  }


// ==================================================
// Lifecycle
// ==================================================

  componentWillReceiveProps(newProps){

    // Randomly changing
    // this.state.data.datasets[0].data = [Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
    // console.log(this.state.data.datasets[0].data);


    let wts1 = newProps.watsonResponseObject;
    wts1 = { anger: 0.023926,
     disgust: 0.056478,
     fear: 0.142307,
     joy: 0.683256,
     sadness: 0.118776 };

    this.normalizeInput(wts1);
  }

// ==================================================
// Render
// ==================================================
  render() {
    return (
      <div>
        <Bar id='actual-bar-chart' data={this.state.data} options={this.options} />
      </div>

    );
  }

}


export default BarChart;
