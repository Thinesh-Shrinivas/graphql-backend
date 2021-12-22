const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapters = new FileSync("src/db/db.json");
const db = low(adapters);

const CraeteUserModel = require("./userfinder");
const CreatePetModel = require("./petfinder");

module.exports = {
  model: {
    Pets: CreatePetModel(db),
    Users: CraeteUserModel(db),
  },
  db,
};
