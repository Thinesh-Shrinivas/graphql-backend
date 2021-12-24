// write the schema
const { gql } = require("apollo-server");

const typDef = gql`
  enum petType {
    Dog
    Cat
  }

  type User {
    name: String!
    id: ID!
    createdAt: Float!
  }
  interface Pet {
    id: ID!
    createdAt: Float!
    name: String!
    type: petType!
  }

  type Dog implements Pet {
    id: ID!
    createdAt: Float!
    name: String!
    type: petType!
    owner: String
  }

  type Cat implements Pet {
    id: ID!
    createdAt: Float!
    name: String!
    type: petType!
    owner: String
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
