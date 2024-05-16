const User = require("../Models/user.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function generateToken(user) {
  // const payload = {
  //     id: user._id,
  //     email: user.email
  // }
  //const secretKey = 'anurag123'
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    "anurag123",
    { expiresIn: "1h" }
  );
}

async function login(email, password) {
  const existingUser = await User.findOne({ email }); // Await the promise

  if (!existingUser) {
    throw new Error("User not found");
  }

  const isPassWordValid = await bcrypt.compare(password, existingUser.password); // Await the promise

  if (!isPassWordValid) {
    throw new Error("Password Incorrect");
  }

  const token = generateToken(existingUser);
  // console.log(token);
  return { existingUser, token };
}

module.exports = {
  login,
};
