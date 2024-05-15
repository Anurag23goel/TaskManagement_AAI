const express = require("express");
const bodyParser = require("body-parser");
const User = require("../Models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { login } = require("../utils/login.js");

const registerUser = async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10); // Await the password hashing
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
    });
    res.json({ status: "ok", user: user });
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate email error code for MongoDB
      res.json({ status: "error", error: "Duplicate email" });
    } else {
      res.json({ status: "error", error: "Something went wrong" });
    }
  }
};

const loginUser = async (req, res) => {
  try {
    const token = await login(req.body.email, req.body.password); // Await the login function

    // Fetch user details here
    const existingUser = await User.findOne({ email: req.body.email });

    res.json({ status: "ok", token: token, user: existingUser }); // Include user in response
  } catch (error) {
    res.status(401).json({ status: "error", error: "Invalid credentials" }); // Return error status code
  }
};

module.exports = {
  registerUser,
  loginUser,
};
