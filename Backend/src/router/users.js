const { Router } = require("express");
const router = Router();

const userController = require("../controllers/users.controller");

//Obterner todas los usuarios
router.get("/", userController.getUsers);

//Agregar un usuario
router.post("/", userController.createUser);

//Eliminar un usuario
router.delete("/:id", userController.deleteUser);

module.exports = router;
