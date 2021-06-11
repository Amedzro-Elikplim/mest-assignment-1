const route = require("express").Router();
const userController = require("../controllers/userController");

route.get("/", userController.getAllUsers);
route.get("/:id", userController.getOneUser);
route.post("/email", userController.getByEmail);
route.patch("/:id", userController.updateUser);
route.post("/register", userController.registerUser);
route.post("/signin", userController.signinUser);
route.delete("/:id", userController.deleteUser);

module.exports = route;
