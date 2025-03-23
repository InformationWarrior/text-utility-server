const { mergeTypeDefs } = require('@graphql-tools/merge');

const rootTypeDefs = require('./rootTypeDefs');
const typeDef = require('./typeDef');

const typeDefs = mergeTypeDefs([
    rootTypeDefs,
    typeDef
]);

module.exports = typeDefs;