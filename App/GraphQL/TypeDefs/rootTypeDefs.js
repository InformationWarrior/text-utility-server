const gql = require('graphql-tag');

const rootType = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  type Subscription {
    _empty: String
  }
`;

module.exports = rootType;
