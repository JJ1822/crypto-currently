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
    this.dataVals = [12, 19, 20, 5, 2];

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
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3
        }]
      }
    }

    this.options = {
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
      }
    }

    Chart.defaults.global.legend.display = false;
  }

// ==================================================
// Lifecycle
// ==================================================

  componentWillReceiveProps(){
    this.state.data.datasets[0].data = [Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
    console.log(this.state.data.datasets[0].data);
  }

// ==================================================
// Render
// ==================================================
  render() {
    return (
      <div>
        <Bar data={this.state.data} options={this.options} />
      </div>

    );
  }

}


export default BarChart;
