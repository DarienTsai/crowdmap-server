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
var sample = {};

// Connection test route
express.get("/", (req, res) => {
  res.json({status: "connected"});
});

// user opens app
io.on('connect', (socket) => {

  console.log("connect");

  // add new location, Send data + sample data
  console.log("connected");

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