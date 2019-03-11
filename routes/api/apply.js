const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

// Load input valudation
const validateApplyInput = require("../../validation/apply");

//Load Application model
const Application = require("../../models/Application");

//@route  GET api/apply/test
//@desc   Tests apply route
//@acces  Public
router.get("/test", (req, res) => {
  res.json({
    msg: "apply route"
  });
});

module.exports = router;
