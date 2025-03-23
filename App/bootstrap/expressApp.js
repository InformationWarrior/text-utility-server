const express = require('express');
const { expressMiddleware } = require('@apollo/server/express4');
const { json } = require('body-parser');
const cors = require('cors');


const createExpressApp = async (apolloServer) => {
  const app = express();

  const corsOptions = {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST']
  };

  app.use(cors(corsOptions));
  app.use(express.json()); // Use express built-in JSON parser

  await apolloServer.start(); // Ensure Apollo server starts before applying middleware

  app.use('/graphql', cors(), json(), expressMiddleware(apolloServer));

  return app;
};

module.exports = { createExpressApp };
