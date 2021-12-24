// write the schema
const { gql } = require("apollo-server");

const typDef = gql`
  type User {
    name: String!
    id: ID!
    createdAt: Float!
  }
  type Pet {
    id: ID!
    createdAt: Float!
    name: String!
    type: String!
  }

  type Query {
    me: User!
    Pet: [Pet]!
  }

  input petData {
    name: String!
    type: String!
  }

  type Mutation {
    addPet(input: petData): Pet!
  }
`;
module.exports = typDef;
