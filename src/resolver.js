module.exports = {
  Query: {
    me(_, __, ctx) {
      return ctx.model.Users.findOne();
    },
    petsReq(_, __, ctx) {
      return ctx.model.Pets.findMany();
    },
  },
  Mutation: {
    addPets(_, { input }, ctx) {
      return ctx.model.Pets.create(input);
    },
  },
};
