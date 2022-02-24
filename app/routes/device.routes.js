const auth = require("../middleware/auth");

module.exports = app => {
  const devices = require("../controllers/device.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", auth, devices.create);

  // Retrieve all Tutorials
  router.get("/", auth, devices.findAll);

  // Retrieve all published Tutorials
  // router.get("/published", devices.findAllPublished);

  // Retrieve a single Tutorial with id
  // router.get("/:id", devices.findOne);

  // Update a Tutorial with id
  router.put("/:id", auth, devices.update);

  // Delete a Tutorial with id
  router.delete("/:id", auth, devices.delete);

  // Create a new Tutorial
  // router.delete("/", devices.deleteAll);

  app.use("/api/devices", router);
};
