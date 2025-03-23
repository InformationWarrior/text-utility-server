const { mergeResolvers } = require('@graphql-tools/merge');

const resolvers = mergeResolvers([
    {
        // Query: {
        //     ...betsQueries,
        // },
        // Mutation: {
        //     ...betsMutations,
        // },
        // Subscription: {
        //     ...betsSubscriptions,
        // },
    },
]);

module.exports = resolvers;