const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const JobSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  role_desc: {
    type: String,
    required: true
  },
  benefits: {
    type: [String],
    required: true
  },
  location: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  jobType: {
    type: String,
    required: true
  }
});

module.exports = Job = mongoose.model("jobs", JobSchema);
