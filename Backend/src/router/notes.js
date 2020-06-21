const { Router } = require("express");
const router = Router();

const noteController = require("../controllers/notes.controller");

//Obterner todas las notas
router.get("/", noteController.getNotes);

//Obtener una nota
router.get("/:id", noteController.getNote);

//Agregar una nota
router.post("/", noteController.createNote);

//Editar una nota
router.put("/:id", noteController.updateNote);

//Eliminar una nota
router.delete("/:id", noteController.deleteNote);

module.exports = router;
