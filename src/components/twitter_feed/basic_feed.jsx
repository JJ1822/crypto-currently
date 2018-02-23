import React from 'react';

const basicFeed = () => {
  return (
    <div className="twitter-feed-content">
        <div id="twitter-feed">
          <a className="twitter-timeline"
            data-dnt="true"
            href="https://twitter.com/hashtag/bitcoin"
            data-widget-id="965677532673581056"
            data-height="100%"

            data-chrome=""
            data-theme="dark"
            data-aria-polite="assertive">
            Tweets about #bitcoin
          </a>
          {
            !function(d,s,id){
              var js, fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
              console.log(s);

              if(!d.getElementById(id)){
                js=d.createElement(s);js.id=id;
                js.src=p+"://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js,fjs);
              }
            }(document,"script","twitter-wjs")
          }
        </div>
    </div>
  );
}

export default basicFeed;


{/*
// <a class="twitter-timeline"
//   data-dnt="true"
//   href="https://twitter.com/hashtag/bitcoin"
//   data-widget-id="965677532673581056"
//   data-height="100%"
//
//
//   data-chrome="nofooter, noheader"
//   data-theme="dark"
//   data-aria-polite="assertive"
//   data-link-color="#19cf86"
//   data-border-color="#ec7277"
//   data-link-color="#ec7277">
//   Tweets about #bitcoin
// </a>
*/}
