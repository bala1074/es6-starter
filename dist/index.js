"use strict";

var _hapi = require("hapi");

var server = new Sever();

server.connection({
  port: 3000,
  host: 'localost'
});

server.start(function (err) {
  if (err) throw err;else console.log("Server Running at: " + server.info.url);
});