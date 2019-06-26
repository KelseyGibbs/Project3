const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
const logger = require("morgan");
const users = require("./routes/api/users");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use("/api/users", users);

// Connect to database. Either local or MLab if deployed
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/WholeBaker";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
