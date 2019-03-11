const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const apply = require("./routes/api/apply");
const jobs = require("./routes/api/jobs");

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(e => {
    console.log(e);
  });

app.use("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE  ");

  next();
});

app.use("/api/apply", apply);
app.use("/api/jobs", jobs);

app.use("*", (req, res, next) => {
  res.status(404).json("invalid endpoint");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening server on port ${port}`));
