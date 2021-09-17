const express = require("express");
const app = express();
const router = express.Router();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`App listen in port :${port}`);
});

app.use("/user", require("./routes/userRoutes"));
