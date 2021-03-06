import React from 'react';
import {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class DoughnutChart extends Component {

  // ==================================================
  // Constructor
  // ==================================================
    constructor(props){
      super(props);
      this.counter = 0;
      this.state = {
        response: [],
        data: {
          labels: ["Negative", "Positive"],
          datasets: [{
              data: [25, 75],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(54, 162, 235, 0.5)',
                  'rgba(255, 206, 86, 0.5)'
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
        // maintainAspectRatio: false,
        cutoutPercentage: 50,
        max: 100
      }
    }

// ==================================================
// Lifecycle:
// ==================================================
  componentWillMount() {
    this.apiCall();
    this.timer = setInterval(this.apiCall, 1000 * 60 * 21)
  }

  componentWillReceiveProps(newProps){
    this.counter = this.counter % this.state.response.length;
    this.agregateEmotions(this.state.response[this.counter]);
    this.counter += 1;

    // this.agregateEmotions(newProps);
    // this.agregateEmotions(); // test
  }

  componentWillUnmount() {
    clearInterval(this.timer);
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

  apiCall() {
    fetch('/api/tone')
        .then(response => {
          return response.json();
        })
        .then((values) => {
          this.setState({response: values});
        });

  }

// ==================================================
// Render
// ==================================================
  render() {
    return (
      <div>
        <div className="chart-title">
          <h1>POSITIVE / NEGATIVE</h1>
        </div>

        <Doughnut data={this.state.data} options={this.options}/>
      </div>
    );
  }

}


export default DoughnutChart;
// <h1>Emotional Distribution</h1>
