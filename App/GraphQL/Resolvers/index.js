const { mergeResolvers } = require('@graphql-tools/merge');
const queries = require("./queryResolver");
const mutations = require("./mutationResolver");

const resolvers = mergeResolvers([
    {
        Query: {
            ...queries,
        },

        Mutation: {
            ...mutations,
        }
    },
]);

module.exports = resolvers;