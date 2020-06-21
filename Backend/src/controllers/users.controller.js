const userCtrl = {};

const User = require("../models/User");

userCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

userCtrl.createUser = async (req, res) => {
  const { username } = req.body;
  const newUser = new User({ username });
  await newUser.save();
  res.json({
    message: "Usuario creado",
    newUser,
  });
};

userCtrl.deleteUser = async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndDelete(id);
  res.json({
    message: "Usuario Elimanado",
  });
};

module.exports = userCtrl;
