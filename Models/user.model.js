const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // tasks: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Todo",
  //   },
  // ],
  token: {
    type: String,
    default: null,
  },
});

// function generateToken(user){
//     const payload = {
//         id: user._id,
//         email: user.email,
//         password: user.password
//     };
//     const secretKey = 'anurag123';
//     return jwt.sign(payload, secretKey, {expiresIn: '1h'})
// }

const User = mongoose.model("User", userSchema);

module.exports = User;
