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
      this.agregateEmotions = this.agregateEmotions.bind(this);
      // this.dataVals = [25, 75];
      // this.counter = 0;
      this.state = {
        data: {
          labels: ["Negative", "Positive", "Neutral"],
          datasets: [{
              data: [25, 75],
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
        cutoutPercentage: 50,
        max: 100
      }
    }

// ==================================================
// Lifecycle:
// ==================================================
  componentWillReceiveProps(newProps){
    // this.agregateEmotions(newProps);
    this.agregateEmotions(); // test
  }
// ==================================================
// Agregate Emotions:
// ==================================================
  agregateEmotions(watsonResponseObject){
    let negative;
    let positive;
    let totalEmotion;

    let emotionPOJO = watsonResponseObject ||
      {
        anger: 0.023926,
        joy: 0.683256,
        disgust: 0.056478,
        fear: 0.142307,
        sadness: 0.118776
      }

      negative = (emotionPOJO.anger + emotionPOJO.disgust +
                    emotionPOJO.fear + emotionPOJO.sadness)/4 * 100;
      positive = emotionPOJO.joy * 100;

      // delete this part, its the random moving for test //
      negative = Math.floor(negative + Math.random()*50);
      positive = Math.floor(positive + Math.random()*50);
      //--------------------------------------------------//

      totalEmotion = positive + negative;
      negative = negative * 100 / totalEmotion;
      positive = positive * 100 / totalEmotion;


      this.setState(
        this.state.data.datasets[0].data = [
          Math.ceil(negative),
          Math.floor(positive)
        ]
      );
  }

// ==================================================
// Render
// ==================================================
  render() {
    return (
      <div>
        <div className="chart-title">
        </div>

        <Doughnut data={this.state.data} options={this.options}/>
      </div>
    );
  }

}


export default DoughnutChart;
// <h1>Emotional Distribution</h1>
