var TweetUtils = require('tweet-utils-js');
var TwitterStream = require('twitter-stream-api');
var NodeGeocoder = require('node-geocoder');


function createTwitterConnection(twitterCredentials, boundingBox, payloadCallback) {
  var Twitter = require('twitter');
  var twitterConnection = new Twitter(twitterCredentials);
  startFilteringTweets();

  function startFilteringTweets() {
   twitterConnection.stream(
      'statuses/filter',
      {track: "'bitcoin, btc, ltc, xrp, xlm, oes, xmr, xem, etc, usdt, tether, nano, bnb, bcn, eos, sia, monero, dash, Zcash, steller, NEO, bitcoin cash, eth, crypto, cryptocurrency, smartcontract, steem, lisk, ripple, blockchain, trading, 特, money, ico, token, cryptolife, cryptocurrencies, mining, bitx, ethereum, litecoin, coinbase, bitcoins, tokensale, decentralized, bitcointalk, cryptomemes, cryptoporn, tokens, altcoin, BTC, ETH, LTC '"},
      twitterStreamHandler
    );
  }


  function twitterStreamHandler(stream) {

    stream.on('error', function(error) {
      // throw error;
      console.log(error);
    });

    stream.on('data', function(tweet) {
      if(tweet.place) {
        let lat = tweet.place.bounding_box.coordinates[0][0][0];
        let lon = tweet.place.bounding_box.coordinates[0][0][1];
        let lat2 = tweet.place.bounding_box.coordinates[0][2][0];
        let lon2 = tweet.place.bounding_box.coordinates[0][1][1];
        console.log(tweet.user.location);
        console.log(tweet.text);
        console.log(lat, lon, lat2, lon2);
        let corlon = lat + ((lat2 - lat) / 2)
        let corlat = lon + ((lon2 - lon) / 2)
        coordinates = {"latitude": corlat, "longitude": corlon};
        payloadCallback(coordinates)
      }
    });
  }
}

module.exports = createTwitterConnection;
