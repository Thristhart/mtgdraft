var socket = require('socket.io-client');
Client = function(lobbyid) {
  this.lobbyid = lobbyid;
}

module.exports = Client;
