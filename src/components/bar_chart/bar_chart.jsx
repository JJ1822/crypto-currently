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
    this.counter = 0;
    this.state = {
      response: [{
        anger: 0.023926,
        joy: 0.683256,
        disgust: 0.056478,
        fear: 0.142307,
        sadness: 0.118776 }],
      data: {
        labels: ["Anger", "Disgust", "Fear", "Joy", "Sadness"],
        datasets: [{
            data: [50,50,50,50,50],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 3
        }]
      }
    }
    this.options = {
      // maintainAspectRatio: false,
      scales: {
        yAxes: [{
          angleLines: {
            display: false
          },
          gridLines: {
              display:false
          },
          ticks: {
            beginAtZero:true,
            display: false,
            max: 100
          }
        }],
        xAxes: [{
          gridLines: {
            display:false
          }
        }]
      }
    }
    this.apiCall = this.apiCall.bind(this);
    Chart.defaults.global.legend.display = false;
  }
// ==================================================
// NormalizeInput
// ==================================================
  normalizeInput(watsonResponseObject) {
    return [ Math.floor(watsonResponseObject.anger * 100),
     Math.floor(watsonResponseObject.disgust * 100),
     Math.floor(watsonResponseObject.fear * 100),
     Math.floor(watsonResponseObject.joy * 100),
     Math.floor(watsonResponseObject.sadness * 100)];
  }
// ==================================================
// Lifecycle
// ==================================================

  componentWillMount() {
    this.apiCall();
    this.timer = setInterval(this.apiCall, 1000 * 60 * 21)
  }

  componentWillReceiveProps(newProps){
      this.counter = this.counter % this.state.response.length;
      this.state.data.datasets[0].data = this.normalizeInput(this.state.response[this.counter]);
      this.counter += 1;
  }

  apiCall() {
    fetch('/api/tone')
        .then(response => {
          return response.json();
        })
        .then((values) => {
          this.setState({response: values});
        });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
// ==================================================
// Render
// ==================================================
  render() {
    return (
      <div>
        <div className="chart-title">
          <h1>EMOTIONAL DISTRIBUTION</h1>
        </div>
        <Bar id='actual-bar-chart' data={this.state.data} options={this.options} />
      </div>
    );
  }
}
export default BarChart;
