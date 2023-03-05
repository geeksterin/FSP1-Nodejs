const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const StudentModel = mongoose.model("Student", studentSchema, "students");
module.exports = StudentModel;
