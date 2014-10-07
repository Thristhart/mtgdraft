var socket = require('socket.io');
var Draft = function(id, name) {
  this.id = id;
  this.name = name;

  this.io = socket();
}

module.exports = Draft;
