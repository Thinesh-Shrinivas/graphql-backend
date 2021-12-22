module.exports = {
  Query: {
    me(_, __, ctx) {
      return ctx.model.Users.findOne();
    },
    petsReq(_, __, ctx) {
      return ctx.model.Pets.findMany();
    },
    reqPet(_, { input }, ctx) {
      return ctx.model.Pets.findOne(input);
    },
    reqPets(_, { input }, ctx) {
      return ctx.model.Pets.findMany(input);
    },
  },
  Mutation: {
    addPets(_, { input }, ctx) {
      return ctx.model.Pets.create(input);
    },
    addUser(_, { input }, ctx) {
      return ctx.model.Users.create(input);
    },
  },
};
