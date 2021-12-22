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
    petsReq: [Pet]!
  }

  input PetInput {
    name: String!
    type: String!
  }

  type Mutation {
    addPets(input: PetInput): Pet!
  }
`;
module.exports = typDef;
