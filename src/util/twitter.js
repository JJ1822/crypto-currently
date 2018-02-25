var Twitter = require('twitter');

class StreamTwitter {
  constructor() {
    const params = {
      consumer_key: 'FlbMS4GcrGnRZlNn9HX23nHhB',
      consumer_secret: '3fOR4yIBQjiSdTsUGMpnkMkI0NDyOyapAorjAZkcbxUaiUkS4B',
      access_token_key: '965675476181164032-57mbhUwoo7Dfz3tcQybt4N2TZCVHtQt',
      access_token_secret: 'T2FY3HP3cOEDk6Z2CTEkceMFYDb4466Bd8LxZnklKxuU3'
    }
    this.client = new Twitter(params);
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
