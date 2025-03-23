const gql = require('graphql-tag');

const typeDef = gql`
  extend type Query {
    getMessage: Message!
  }

  type Message {
    success: Boolean!
    message: String!
  }
`;

module.exports = typeDef;