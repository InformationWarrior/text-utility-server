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

  extend type Subscription {
    timerRunning: Timer!  # Accepts a duration parameter
  }

  type Message {
    success: Boolean!
    message: String!
  }

  type TextPayload {
    text: String!
  }

  type Timer {
    timeRemaining: Float!
  }
`;

module.exports = typeDef;
