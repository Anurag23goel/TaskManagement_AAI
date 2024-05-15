const express = require("express");
const bodyParser = require("body-parser");
const User = require("../Models/user.model");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        console.log(user);
        res.json({ status: "ok", user: true });
    } catch (error) {
        if (error.code === 11000) {
            // Duplicate email error code for MongoDB
            res.json({ status: "error", error: "Duplicate email" });
        } else {
            res.json({ status: "error", error: "Something went wrong" });
        }
    }
};

const loginUser = async(req,res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
      });
    
      if (user) {
        const token = jwt.sign(
          {
            name: user.name,
            email: user.email,
          },
          "secret123"
        );
    
        return res.json({ status: "ok", user: true });
      } else {
        res.json({ status: "error", user: false });
      }
}

module.exports = {
    registerUser,
    loginUser
};
