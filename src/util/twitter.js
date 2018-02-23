var Twitter = require('twitter');

class StreamTwitter {
  constructor() {
    const params = {

      consumer_key: 'xx',
      consumer_secret: 'xx',
      access_token_key: 'xx-xx',
      access_token_secret: 'xx'

    }
    this.client = new Twitter(params);
    this.stream = this.client.stream('statuses/filter', {track: 'bitcoin, btc, crypto, cryptocurrency, blockchain, bitcoins, bitcointalk'});
  }

  tweetStream(callback) {
    return this.stream.on('data', callback)
  }

}

module.exports = StreamTwitter;
