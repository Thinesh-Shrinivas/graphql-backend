module.exports = {
  Query: {
    me(_, __, ctx) {
      return ctx.model.Users.findOne();
    },
  },
  Mutation: {
    addPet(_, { input }, ctx) {
      return ctx.model.Pets.create(input);
    },
  },
};
