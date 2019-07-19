const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const routes = require("./routes");
const users = require("./routes/api/users");
const logger = require("morgan");


const app = express();
app.use(logger("dev"));

// Bodyparser middleware
app.use(express.urlencoded({  extended: true}));
app.use(express.json());

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/WholeBaker";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true
});


// Routes
app.use("/api/users", users);
app.use(routes);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
