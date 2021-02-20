const express = require('express')();
const cors = require('cors');
express.use(cors());
const http = require('http').createServer(express);
const io = require('socket.io')(http);

var PORT = 5000;

express.get("/", (req, res) => {
  res.json({status: "connected"});
});

http.listen(PORT)