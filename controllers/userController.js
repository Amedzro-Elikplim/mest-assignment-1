const User = require("../models/User");
const { registerValidator, signinValidator } = require("../utils/validation");

const registerUser = async (req, res) => {
  // get infomation fron the front end
  // verify if the information is valid

  const result = await registerValidator.validateAsync(req.body);
  const { firstName, lastName, email, password } = result;

  //check is the users already exists
  let userExist = await User.findOne({ email });

  if (userExist) {
    res.status(401).send({ message: "User already exists" });
    return;
  }
  // register the user

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });
  res.status(201).send({ user });
};

const signinUser = async (req, res) => {
  // get the information from the user
  // validate the information

  const result = await signinValidator.validateAsync(req.body);
  const { email, password } = result;

  // check id user exists
  let user = await User.findOne({ email });

  if (!user) {
    res.status(400).send({ message: "Invalide credentials" });
    return;
  }

  res.status(200).send({ user });
};

const getAllUsers = async (req, res) => {
  // go to database and fetch all the users
  const users = await User.find();

  //   display all the users
  res.status(200).send({ users });
};

const getOneUser = async (req, res) => {
  // get information from the user
  const { id } = req.params;
  // got to dtatbase and fetch specified user
  const user = await User.findById(id);
  res.status(200).send({ user });
};

const getByEmail = async (req, res) => {
  //
  const { email } = req.body;
  const user = await User.findOne({ email });
  res.status(200).send({ user });
};

const updateUser = async (req, res) => {
  // get info from the user
  const { id } = req.params;
  // const newUser = req.body;
  // console.log(newUser);
  let userExist = await User.findById(id);

  if (!userExist) {
    res.status(400).send({ message: "User does not exist" });
  }

  const user = await User.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).send({ user });
};

const deleteUser = async (req, res) => {
  //
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.status(200).send({ message: "Deleted Successfully" });
};

module.exports = {
  registerUser,
  signinUser,
  getAllUsers,
  getOneUser,
  getByEmail,
  updateUser,
  deleteUser,
};
