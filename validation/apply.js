const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateApplyInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.surname = !isEmpty(data.surname) ? data.surname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.mobile = !isEmpty(data.mobile) ? data.mobile : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.birth = !isEmpty(data.birth) ? data.birth : "";

  if (!validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be 2-30 characters";
  }

  if (validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (!validator.isLength(data.surname, { min: 2, max: 30 })) {
    errors.name = "Surname must be 2-30 characters";
  }

  if (validator.isEmpty(data.surname)) {
    errors.name = "Surname field is required";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (!validator.isMobilePhone(data.mobile)) {
    errors.name = "Phone field is required";
  }

  if (validator.isEmpty(data.gender)) {
    errors.password = "Gender field is required";
  }

  if (validator.isEmpty(data.birth)) {
    errors.password2 = "Birth date is required ";
  }

  return { errors, isValid: isEmpty(errors) };
};
