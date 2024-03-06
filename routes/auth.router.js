const express = require("express");
const User = require("../model/user.model");
const CryptoJS = require('crypto-js');
// const singupHandler = require("../controllers/signupController");
// const loginHandler = require("../controllers/loginController");

const router = express.Router();

router.route("/register").post(async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      number: req.body.number,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASSWORD_SECRET_KEY
      ).toString(),
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: "error creating user" });
  }
});

module.exports = router;
