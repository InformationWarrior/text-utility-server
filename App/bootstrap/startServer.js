require('dotenv').config();
const { createServer } = require('http');
const { createExpressApp } = require('./expressApp');
const { createApolloServer } = require('./apolloServer');
const { createWebSocketServer } = require('./graphqlWS');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  const httpServer = createServer(); // Create HTTP server instance

  // Initialize WebSocket Server
  const wsServerCleanup = createWebSocketServer(httpServer);

  // Create Apollo Server
  const apolloServer = createApolloServer(httpServer, wsServerCleanup);

  // Create Express App
  const app = await createExpressApp(apolloServer);

  // Attach Express App to HTTP Server
  httpServer.on('request', app);

  httpServer.listen(PORT, () => {
    console.log(`🚀 GraphQL API available at http://localhost:${PORT}/graphql`);
    console.log(`📡 Subscriptions available at ws://localhost:${PORT}/graphql`);
  });

  return { apolloServer, httpServer, wsServerCleanup };
};

module.exports = startServer;
