const nanoid = require("nanoid");
const CreatePetModel = (db) => {
  return {
    findMany(filter) {
      return db.get("pet").filter(filter).value();
    },
    findOne(filter) {
      return db.get("pet").find(filter).value();
    },
    create(pet) {
      const data = { id: nanoid(), createdAt: Date.now(), ...pet };
      db.get("pet").push(data).write();
      return data;
    },
  };
};

module.exports = CreatePetModel;
