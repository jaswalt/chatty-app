const express = require('express');
const WebSocket = require('ws')
const SocketServer = WebSocket.Server;
const uuidv1 = require('uuid/v1');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

let onlineUsers = 0;

// wss.broadcast = function broadcast(data) {
//   wss.clients.forEach(function each(client) {
//     if (client.readyState === WebSocket.OPEN) {
//       console.log("Send to Client")
//       client.send(data);
//     }
//   });
// };

 function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};

const broadcastCount = function() {
  let userCount = { type: "USER_COUNT", count: wss.clients.size };
  console.log('Client connected');
  console.log("userCount: ", userCount);
  broadcast(userCount);
}

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  broadcastCount();

  ws.on('message', (message) => {
    let msg = JSON.parse(message);
    msg['id'] = uuidv1();
    broadcast(msg);
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    broadcastCount();
    console.log('Client disconnected');
  });
});