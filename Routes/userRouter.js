const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const User = require("../Models/user.model");
const jwt = require("jsonwebtoken");

// Parse request bodies for PUT requests
router.use(bodyParser.json());

router.post("/register", async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    console.log(user);
    res.json({ status: "ok", user: true });
  } catch (error) {
    res.json({ status: "error", error: "DUplicate email" });
  }
});
router.post("/login", async (req, res) => {
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
});

module.exports = router;
