const ToneAnalysis = require('./tone_analyser');
const StreamTwitter = require('./twitter');
const TwitterStore = require('./tweet_store');

var express = require('express');
const app = express();
const store = new TwitterStore();

const cleaner = (toneResults) => {
  let results = [];
  let toneCategories = toneResults.sentences_tone;
  for(let i = 0; i < toneCategories.length; i++) {
      let singleResult = {};
      let arr = toneCategories[i].tone_categories[0].tones;
    for(let j = 0; j < arr.length; j++) {

      singleResult[arr[j].tone_id] = arr[j].score;
    }
    results.push(singleResult);
  }
  return results;
}

// const input = {
//    text: 'So while the banking regulators in India were bashing bitcoin for being unregulated a $2 bn fraud ring was growing under. Bitcoin: Its Either Worth $20K or Nothing. Nigerians Ignore Warnings, Stake N1.3Bn on Bitcoin Weekly. creators of Bitcoin Futures Defend Practices Against Regulation. ',
//    content_type: 'text/plain'
 // }

   app.get('/api/tone', (req, res) => {
     res.send(store.tones);
   });

   app.get('/api/tweetids', (req, res) => {
     res.send(store.tweetIds);
   });




   app.listen(4000);
