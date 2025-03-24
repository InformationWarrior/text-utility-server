const gql = require('graphql-tag');

const typeDef = gql`
  extend type Query {
    getMessage: Message!
  }

  extend type Mutation {
    convertToUpperCase(text: String!): TextPayload!
    convertToLowerCase(text: String!): TextPayload!
    checkPalindrome(text: String!): TextPayload!
    clearText: TextPayload!
  }

  type Message {
    success: Boolean!
    message: String!
  }

  type TextPayload {
    text: String!
  }
`;

module.exports = typeDef; 