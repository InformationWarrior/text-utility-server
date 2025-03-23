const { mergeResolvers } = require('@graphql-tools/merge');
const queries = require("./queryResolver");
const resolvers = mergeResolvers([
    {
        Query: {
            ...queries,
        },
    },
]);

module.exports = resolvers;