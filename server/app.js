const express = require("express");
const app = express();
const router = express.Router();
const port = 3000;
const bodyParser = require("body-parser");
const config = require("config");
const apiPrefix = config.get("apiPrefix");
const passport = require("passport");
const passportConfig = require("./config/server/passportConfig");

passport.use(passportConfig.createStrategy());
app.use(passport.initialize());

app.use(bodyParser.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`App listen in port :${port}`);
});

app.use(apiPrefix + "/user", require("./routes/userRoutes"));
app.use(apiPrefix + "/auth", require("./routes/authRoutes"));
