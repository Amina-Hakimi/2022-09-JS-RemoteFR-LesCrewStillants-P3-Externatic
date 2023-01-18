const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// routes User
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/register", userControllers.add);
router.post("/login", userControllers.log);

module.exports = router;
