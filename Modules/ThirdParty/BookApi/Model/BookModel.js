const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  isbn: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  authors: [
    {
      type: String,
      required: true,
    },
  ],
  count: {
    type: Number,
  },
});

module.exports = mongoose.model("Book", bookSchema, "books");//(modelName,schemaFromWhichTheModelIsCreating,CollectionNameWhereTheInstanceOfModelNameStore);
