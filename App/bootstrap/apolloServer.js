const { ApolloServer } = require('@apollo/server');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const schema = require('../GraphQL/schema');

const createApolloServer = (httpServer, wsServer) => {
  return new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await wsServer.dispose();
            }
          };
        }
      }
    ]
  });
};

module.exports = { createApolloServer };
