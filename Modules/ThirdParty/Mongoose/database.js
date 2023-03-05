const mongoose = require("mongoose");
const URL =
  "mongodb+srv://samiul-khan:Po8rt2aEDuTbkeoq@cluster0.34ruzlx.mongodb.net/?retryWrites=true&w=majority";
async function connetToDatabase() {
  try {
    console.log("inside method");
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connetToDatabase;
