var Twitter = require('twitter');

class StreamTwitter {
  constructor() {
    const params = {
<<<<<<< HEAD
      consumer_key: 'xx',
      consumer_secret: 'xx',
      access_token_key: 'xx-xx',
      access_token_secret: 'xx'
=======
      consumer_key: 'FlbMS4GcrGnRZlNn9HX23nHhB',
      consumer_secret: '3fOR4yIBQjiSdTsUGMpnkMkI0NDyOyapAorjAZkcbxUaiUkS4B',
      access_token_key: '965675476181164032-57mbhUwoo7Dfz3tcQybt4N2TZCVHtQt',
      access_token_secret: 'T2FY3HP3cOEDk6Z2CTEkceMFYDb4466Bd8LxZnklKxuU3'
>>>>>>> d9496803ba4eed05d3f3b5f75f3395f5f31c8fd7
    }
    this.client = new Twitter(params);
    this.stream = this.client.stream('statuses/filter', {track: 'bitcoin, btc, crypto, cryptocurrency, blockchain, bitcoins, bitcointalk'});
  }

  tweetStream(callback) {
    return this.stream.on('data', callback)
  }

}

module.exports = StreamTwitter;
