const { ApolloServer, gql } = require("apollo-server");

const typDef = gql`
  type Book {
    name: String!
    id: Int!
    author: String!
    joner: String
  }

  type User {
    name: String!
    id: Int!
    number: Int
    address: String
  }

  input InputBook {
    name: String
    id: Int
  }

  type Query {
    book: Book!
    serachBook(inputB: InputBook): [Book]!
  }

  # type Mutation{

  # }
`;

const resolver = {
  Query: {
    book() {
      return {
        name: "Revenant of crucade",
        id: 1,
        author: "Thinesh",
      };
    },
    serachBook(_, { inputB }) {
      return [
        {
          name: "Revenant of crucade",
          id: 1,
          author: "Thinesh",
        },
        {
          name: "The Burning Of Street",
          id: 2,
          author: "Thinesh",
        },
      ].filter((arr) => arr.id === inputB.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs: typDef,
  resolvers: resolver,
});

server.listen(4000).then(({ url }) => console.log(`started on ${url}`));
