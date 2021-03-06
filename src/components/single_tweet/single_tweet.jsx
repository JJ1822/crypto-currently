import React from 'react';
import {Component} from 'react';
import TweetEmbed from 'react-tweet-embed';

class SingleTweet extends Component {

constructor(props) {
  super(props);
  this.counter = 0;
  this.state = {
    tweet: "",
    tweetObj: [],
  }
}

// ==================================================
// Lifecycle
// ==================================================
  componentWillMount() {
    this.apiCall();
    this.timer = setInterval(this.apiCall, 1000 * 60 * 21)
  }

  componentWillReceiveProps(newProps){
    this.counter = this.counter % this.state.tweetObj.length;
    this.state.tweet = this.state.tweetObj[this.counter].tweetId
    this.counter += 1;
    // console.log('SINGLE TWEET COUNTER', this.counter);
    // console.log('SINGLE TWEET ARR', this.state.tweetObj[this.counter]);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  apiCall() {
    fetch('/api/tweetIds')
        .then(response => {
          return response.json();
        })
        .then((values) => {
          this.setState({tweetObj: values});
        });

  }
// ==================================================
// Render
// ==================================================
  render() {

    return (
      <div className='main-tweet-box'>
        <TweetEmbed options={{theme: 'dark', width: '340', cards: 'hidden'}} id={`${this.state.tweet}`} />
      </div>
    );
  }

}


export default SingleTweet;

//
// <a href={`https://twitter.com/${this.props.userId}/status/${this.props.tweetId}`}>TWEET</a>
//


// <blockquote class="twitter-tweet" data-lang="en">
//   <a href="https://twitter.com/trend_slam/status/967934452608524293?ref_src=twsrc%5Etfw">tweeeet</a>
// </blockquote>
// <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
//
//
//







//
// <blockquote className="twitter-tweet"
//   data-cards="hidden"
//   data-width="100%"
//   data-height="100%"
//   data-theme="dark"
//   data-lang="en">
//   <a href="https://twitter.com/ForbesCrypto/status/967442398891651073?ref_src=twsrc%5Etfw"></a>
// {
//   !function(d,s,id){
//     var js, fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
//     // console.log(s);
//
//     if(!d.getElementById(id)){
//       js=d.createElement(s);js.id=id;
//       js.src=p+"://platform.twitter.com/widgets.js";
//       fjs.parentNode.insertBefore(js,fjs);
//     }
//   }(document,"script","twitter-wjs")
// }
// </blockquote>


// <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>



//
// <p>
//   " {`${this.simpleTweet}`} "
// </p>
