const { mergeResolvers } = require('@graphql-tools/merge');
const queries = require("./queryResolver");
const mutations = require("./mutationResolver");
const subscriptions = require("./subscriptionResolver");

const resolvers = mergeResolvers([
    {
        Query: {
            ...queries,
        },

        Mutation: {
            ...mutations,
        },
        
        Subscription: {
            ...subscriptions,
        }
    },
]);

module.exports = resolvers;