const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

//Load Job model
const Job = require("../../models/Job");

//Load Application model
const Application = require("../../models/Application");

//@route  GET api/jobs/test
//@desc   Tests user route
//@acces  Public
router.get("/test", (req, res) => {
  res.json({
    msg: "jobs route"
  });
});

//@route  GET api/jobs/
//@desc   Get all jobs
//@acces  Public
router.get("/", (req, res) => {
  console.log("jobs / route");
  Job.find().then((err, jobs) => {
    if (err) {
      return res.status(400).json(err);
    } else {
      res.json(jobs);
    }
  });
});

//@route  POST api/jobs/create
//@desc   create a job
//@acces  Public
router.post("/create", (req, res) => {
  let {
    title,
    company,
    role_desc,
    benefits,
    location,
    section,
    jobType
  } = req.body;

  console.log(req.body);

  Job.create(
    {
      title,
      company,
      role_desc,
      benefits: benefits.split(","),
      location,
      section,
      jobType
    },
    function(err, result) {
      if (err) throw err;
      res.json({ msg: "job successfully created" });
    }
  );
});

module.exports = router;
