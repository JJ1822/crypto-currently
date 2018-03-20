const ToneAnalysis = require('./src/util/tone_analyser');
const StreamTwitter = require('./src/util/twitter');
const TwitterStore = require('./src/util/tweet_store');
const initServer = require('./twitter-geo-server-js-master/server.js');
var twitterCredentials = require('./twitter-geo-server-js-master/twitter-credentials');
var Twitter = require('twitter');
var path = require('path');

var express = require('express');
const app = express();
const store = new TwitterStore();

var twit = new Twitter(twitterCredentials.mapKey),
stream = null;


 app.set("port", process.env.PORT || 8081);

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


   var http = require('http');
   var httpServer = http.createServer(app);
   let io = require('socket.io').listen(httpServer);
   // console.log(initServer);
   // initServer(httpServer);
     io.sockets.on('connection', function (socket) {

       socket.on("start tweets", function() {

        if(stream === null) {
          //Connect to twitter stream passing in filter for entire world.
          twit.stream('statuses/filter', {track: "'bitcoin, btc, ltc, xrp, xlm, oes, xmr, xem, etc, usdt, tether, nano, bnb, bcn, eos, sia, monero, dash, Zcash, steller, NEO, NEM, omg, bitcoin cash, eth, crypto, cryptocurrency, smartcontract, steem, lisk, ripple, blockchain, trading, 特, money, ico, token, cryptolife, cryptocurrencies, mining, bitx, ethereum, litecoin, coinbase, bitcoins, tokensale, decentralized, bitcointalk, cryptomemes, cryptoporn, tokens, altcoin, BTC, ETH, LTC '"}, function(s) {
              stream = s;
              stream.on('data', function(tweet) {
                  // Does the JSON result have coordinates
                  if(tweet.place) {
                    let lat = tweet.place.bounding_box.coordinates[0][0][0];
                    let lon = tweet.place.bounding_box.coordinates[0][0][1];
                    let lat2 = tweet.place.bounding_box.coordinates[0][2][0];
                    let lon2 = tweet.place.bounding_box.coordinates[0][1][1];
                    // console.log(tweet.user.location);
                    // console.log(tweet.text);
                    // console.log(lat, lon, lat2, lon2);
                    let corlon = lat + ((lat2 - lat) / 2)
                    let corlat = lon + ((lon2 - lon) / 2)
                    coordinates = {"latitude": corlat, "longitude": corlon};

                      socket.broadcast.emit("twitter-stream", coordinates);

                      //Send out to web sockets channel.
                      socket.emit('twitter-stream', coordinates);

                  }
              });
          });
        }
      });

        // Emits signal to the client telling them that the
        // they are connected and can start receiving Tweets
        socket.emit("connected");
    });

   httpServer.listen(app.get("port"), function() {
     console.log("server running");
   });
