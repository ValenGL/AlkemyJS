const express = require("express");
const router = express.Router({ mergeParams: true });
const routeController = require("../common/routeController");
// const budgetController = require("../controller/budgetController");
const userController = require("../controller/userController");

router.post("/singin", (req, res) => {
  routeController.handleRequest(req, res, userController.login);
});

// router.post('/singin', (req, res) => {
//   routeController.handleRequest(req, res, budgetController.getAllEntry)
// });

// router.post('/singup', (req, res) => {
//   routeController.handleRequest(req, res, budgetController.getAllEgress)
// });

module.exports = router;
