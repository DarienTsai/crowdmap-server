const express = require('express')();
const cors = require('cors');
express.use(cors());
const http = require('http').createServer(express);

const io = require('socket.io')(http);

// const io = require('socket.io')(http, {
//   cors: {
//     origin: "false",
//   }
// });

var PORT = 5000;

// Sample data for demo
var base = [33.998470127751006, -117.94746979872437];
const samples = require('./samples');


// Connection test route
express.get("/", (req, res) => {
  res.json({
    status: "connected",
    data: samples(base)
  });
});

// user opens app
io.on('connect', (socket) => {

  console.log("connect");

  socket.emit('get', samples(base));

  // user moves
  socket.on("update", (data) => {
    console.log('up');
    console.log(data);
  });

  // user closes app
  socket.on("disconnect", (data) => {
    console.log('dis');
    console.log(data);
  });
});

const server = http.listen(process.env.PORT || PORT, ()=>{
  console.log("running on ", PORT);
});