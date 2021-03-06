const express = require("express");
const router = express.Router();
const routeController = require("../common/routeController");
const userController = require("../comntroller/userController");

router.get("/", (req, res) => {
  routeController.handleRequest(req, res, userController.getAll);
});

module.exports = router;
