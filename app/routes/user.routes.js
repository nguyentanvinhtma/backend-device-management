module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Login
  router.post("/", users.login);

  app.use("/api/login", router);
};