module.exports = {
  Query: {
    me(_, __, ctx) {
      return ctx.model.Users.findOne();
    },
  },
};
