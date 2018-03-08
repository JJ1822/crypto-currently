var webSocketConnections = [];
var nextWebSocketConnectionID = 1;

// initServer();

function initServer(httpServer) {
  // var settings = getServerSettingsFromCommandLine();
  createServer(httpServer);
}

// function getServerSettingsFromCommandLine() {
//   var parseCommandLineArguments = require('./js/command-line-arguments');
//   var commandLineArguments = process.argv.slice(2);
//   // return parseCommandLineArguments(commandLineArguments);
// }
const BOUNDING_BOX = '-180,-90,180,90';

function createServer(httpServer) {
  var createTwitterConnection = require('./js/twitter-connection');
  var createWebSocketServer = require('./js/web-socket-server');
  var twitterCredentials = require('./twitter-credentials');
  createTwitterConnection(twitterCredentials.mapKey, BOUNDING_BOX, broadcastPayload);

  var ws = require('ws');
  var webSocketServer = new ws.Server({ server: httpServer });
  webSocketServer.on('connection', webSocketConnectionHandler);
}

function broadcastPayload(payload) {
  var stringifiedPayload = JSON.stringify(payload);
  webSocketConnections.forEach(function(webSocketConnection) {
    webSocketConnection.send(stringifiedPayload);
  });
}

function serverName() {
  return 'Twitter Geo Server';
}

function webSocketConnectionHandler(webSocketConnection) {
  addWebSocketConnection();
  addWebSocketDisconnectionListener();

  function addWebSocketConnection() {
    webSocketConnection.id = nextWebSocketConnectionID;
    webSocketConnections[webSocketConnection.id] = webSocketConnection;
    nextWebSocketConnectionID += 1;
    console.log('Client %d connected', webSocketConnection.id);
  }

  function addWebSocketDisconnectionListener() {
    webSocketConnection.on('close', function() {
      delete webSocketConnections[webSocketConnection.id];
      console.log('Client %d disconnected', webSocketConnection.id);
    });
  }
}

module.exports = initServer;
