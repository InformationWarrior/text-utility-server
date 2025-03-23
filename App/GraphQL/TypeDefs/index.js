const { mergeTypeDefs } = require('@graphql-tools/merge');

const rootTypeDefs = require('./rootTypeDefs');

const typeDefs = mergeTypeDefs([
    rootTypeDefs,
]);

module.exports = typeDefs;