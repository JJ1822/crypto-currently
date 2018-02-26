const StreamTwitter = require('./twitter');
const ToneAnalysis = require('./tone_analyser');
const emojiStrip = require('emoji-strip');

class TwitterStore {
  constructor() {
    this.newTweets = [];
    this.clock = Date.now();
    this.filteredTweets = [];
    this.tones = [];
    this.tweetIds = []
    new StreamTwitter().tweetStream((event) => this.recieveTweet(event));
  }

  recieveTweet(tweet) {

    if(tweet.extended_tweet && tweet.user.followers_count) {
      this.newTweets.push(tweet);
    }
    if(Date.now() - this.clock > (1000 * 60)) {
      this.tweetIds = []
      this.filterTweets();
      this.clock = Date.now();
    }
  }

  returnTweets() {
    return this.filteredTweets;
  }

  cleaner(toneResults) {
    let results = []
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



  filterTweets() {
    this.filteredTweets = this.newTweets.sort((a,b) => b.user.followers_count - a.user.followers_count).slice(0,80);
      // console.log(this.filteredTweets[0].user.id_str);
      // this.tweetIds = this.filteredTweets.map(t => { tweetId: t.id_str});
      for(let i = 0; i < this.filteredTweets.length; i++) {
        let tweet = this.filteredTweets[i]
        this.tweetIds.push({ tweetId: tweet.id_str, userId: tweet.user.id_str })
      }
      console.log(this.tweetIds);

      let arr = this.filteredTweets.map(t => t.extended_tweet.full_text);

      let newTweets = arr.map(el => el.replace(/[^a-zA-Z ]/g, ""))
      newTweets = newTweets.join(". ")

    const formatted = {
      text: newTweets,
      content_type: 'text/plain'
     }

  new ToneAnalysis().ToneAnalyser(formatted, (error, response) => this.tones = this.cleaner(response));

    this.filteredTweets = [];
    this.newTweets = [];

  }
}

module.exports = TwitterStore;
