const { ApolloServer } = require("apollo-server");
const { model, db } = require("./db");
const typeDef = require("./schema");
const resolver = require("./resolver");

const server = new ApolloServer({
  typeDefs: typeDef,
  resolvers: resolver,
  context() {
    return {
      model,
      db,
    };
  },
});

server.listen(4000).then(({ url }) => console.log(`launched on ${url}`));
