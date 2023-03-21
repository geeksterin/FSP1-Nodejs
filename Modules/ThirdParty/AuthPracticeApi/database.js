const mongoose = require("mongoose");

async function connecToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database is connected");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connecToDatabase;
