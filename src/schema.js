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

  input InputReqPet {
    id: ID
    type: String
  }

  type Query {
    me: User!
    petsReq: [Pet]!
    reqPets(input: InputReqPet): [Pet]!
    reqPet(input: InputReqPet): Pet!
  }

  input PetInput {
    name: String!
    type: String!
  }

  input UserInput {
    name: String!
  }

  type Mutation {
    addPets(input: PetInput): Pet!
    addUser(input: UserInput): User!
  }
`;
module.exports = typDef;
