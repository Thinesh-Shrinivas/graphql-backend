module.exports = {
  Query: {
    me(_, __, ctx) {
      return ctx.model.Users.findOne();
    },
    Pet(_, { input }, ctx) {
      return ctx.model.Pets.findMany(input);
    },
  },
  Mutation: {
    addPet(_, { input }, ctx) {
      return ctx.model.Pets.create(input);
    },
  },
  Pet: {
    __resolverType(pet) {
      if (pet.owner === "Raj") return "Dog";
      return "Cat";
    },
  },
};
