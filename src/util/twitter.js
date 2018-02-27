var Twitter = require('twitter');

class StreamTwitter {
  constructor() {
    const params = require('../../twitter-geo-server-js-master/twitter-credentials');
    this.client = new Twitter(params.watsonKey);
    this.stream = this.client.stream('statuses/filter', {track: 'bitcoin, btc'});
  }

  tweetStream(callback) {
    this.stream.on('error', function(error) {
      console.log(error);
    });

    return this.stream.on('data', callback)
  }

}

module.exports = StreamTwitter;
