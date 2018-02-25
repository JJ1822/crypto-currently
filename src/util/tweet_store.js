const StreamTwitter = require('./twitter');
const ToneAnalysis = require('./tone_analyser');

class TwitterStore {
  constructor() {
    this.newTweets = [];
    this.clock = Date.now();
    this.filteredTweets = [];
    this.tones = [];
    new StreamTwitter().tweetStream((event) => this.recieveTweet(event));
  }

  recieveTweet(tweet) {
    this.newTweets.push(tweet);
    // console.log(this.newTweets);
    if(Date.now() - this.clock > (1000 * 60 * 2)) {
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
        // console.log(toneCategories.length);
        // console.log("--------------------------");
        // console.log(i);
        // console.log("--------------------------");
        // console.log(toneCategories[i].tone_categories[0].tones);
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
    // console.log(this.filteredTweets.slice(0,15).map(t => t.user.followers_count));
    // throw "done";
    // remover punc and seperate by period
    // console.log(this.filteredTweets[0].text);
    // console.log(this.filteredTweets);
    let input = "";
    let text;
    for(let i = 0; i < this.filteredTweets.length; i++) {
      if(this.filteredTweets[i].extended_tweet !== undefined) {
        input += (this.filteredTweets[i].extended_tweet.full_text.replace(/[.,\/#!|$%\^&\*@;:{}=\-_`~()?"]/g,"").toLowerCase() + ".");
      }
    }
    const formatted = {
       text: input.replace(/\s+/g, " "),
       content_type: 'text/plain'
     }
    // console.log(input);

    console.log(input);
  new ToneAnalysis().ToneAnalyser(formatted, (error, response) => this.tones = this.cleaner(response));
    // console.log(this.newTweets);
    this.filteredTweets = [];
    this.newTweets = [];
  }
}

module.exports = TwitterStore;
