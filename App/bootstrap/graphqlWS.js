const { WebSocketServer } = require('ws');
const { useServer } = require('graphql-ws/use/ws');
const schema = require('../GraphQL/schema');

const createWebSocketServer = (httpServer) => {
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql',
  });

  const serverCleanup = useServer({ schema }, wsServer);
  console.log('📡 WebSocket Server Ready!');
  return serverCleanup;
};

module.exports = { createWebSocketServer };
