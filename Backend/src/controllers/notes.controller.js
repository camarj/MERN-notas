const notesCtrl = {};

const Note = require("../models/Note");

notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

notesCtrl.createNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new Note({
    title,
    content,
    date,
    author,
  });

  await newNote.save();

  res.json("Nota agregada");
};

notesCtrl.getNote = async (req, res) => {
  const id = req.params.id;
  const note = await Note.findById(id);
  res.json(note);
};

notesCtrl.updateNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  const id = req.params.id;

  const noteEdit = await Note.findByIdAndUpdate(id, {
    title,
    content,
    date,
    author,
  });
  res.json({
    message: "Nota editada",
    noteEdit,
  });
};

notesCtrl.deleteNote = async (req, res) => {
  const id = req.params.id;

  await Note.findByIdAndDelete(id);

  res.json({
    message: "Nota Eliminada",
  });
};

module.exports = notesCtrl;
