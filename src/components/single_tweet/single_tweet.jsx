import React from 'react';
import {Component} from 'react';


class SingleTweet extends Component {

constructor(props) {
  super(props);
  this.simpleTweet = "That feeling when you just bought the dip because you know Bitcoin will always bounce back every single time";
  // this.simpleTweet = "I <3 BTC";
}

// ==================================================
// Render
// ==================================================
  render() {
    return (
      <div className='main-tweet-box'>
          <blockquote className="twitter-tweet"
            data-cards="hidden"
            data-width="100%"
            data-height="100%"
            data-theme="dark"
            data-lang="en">
            <a href="https://twitter.com/ForbesCrypto/status/967442398891651073?ref_src=twsrc%5Etfw"></a>
          {
            !function(d,s,id){
              var js, fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
              // console.log(s);

              if(!d.getElementById(id)){
                js=d.createElement(s);js.id=id;
                js.src=p+"://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js,fjs);
              }
            }(document,"script","twitter-wjs")
          }
          </blockquote>
      </div>



    );
  }

}


export default SingleTweet;



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
