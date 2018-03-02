const ToneAnalysis = require('./src/util/tone_analyser');
const StreamTwitter = require('./src/util/twitter');
const TwitterStore = require('./src/util/tweet_store');
var path = require('path');

var express = require('express');
const app = express();
const store = new TwitterStore();


 app.set("port", process.env.PORT || 4000);

// Express only serves static assets in production
  // if (process.env.NODE_ENV === "production") {
    // app.use(express.static("/build"));
  // }
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

   app.get('/api/tone', (req, res) => {
     res.send(store.tones);
   });


   app.get('/api/tweetIds', (req, res) => {
     res.send(store.tweetIds);
   });




   app.listen(app.get("port"), function() {
     console.log("server running");
   });
