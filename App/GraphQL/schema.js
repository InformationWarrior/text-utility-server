const { makeExecutableSchema } = require('@graphql-tools/schema');

const typeDefs = require('./TypeDefs/index');
const resolvers = require('./Resolvers/index');

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

module.exports = schema;
