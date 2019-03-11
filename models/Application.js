const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const ApplicationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  mobile: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  job: [{ type: Schema.Types.ObjectId, ref: "jobs" }]
});

module.exports = Job = mongoose.model("applications", ApplicationSchema);
