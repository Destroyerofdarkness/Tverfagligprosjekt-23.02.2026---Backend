const mongoose = require("mongoose");

async function connectToMongoDb() {
  try {
    await mongoose.connect(process.env.Mongo);
    console.log(
      "Succesfully connected to database on:",
      mongoose.connection.name,
    );
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  connectToMongoDb,
};
