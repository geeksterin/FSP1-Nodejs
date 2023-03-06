const mongoose = require("mongoose");

async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db is connected");
  } catch (error) {
    console.log("connection failed");
  }
}

module.exports = connectToDb;
