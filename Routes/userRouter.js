const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const User = require("../Models/user.model");
const jwt = require("jsonwebtoken");
const {registerUser, loginUser} = require('../controllers/user.controller.js')

// Parse request bodies for PUT requests
router.use(bodyParser.json());

router.route("/register").post(registerUser);


router.route('/login').post(loginUser)

router.post('/logout')

module.exports = router;
