const express = require("express");
const User = require("../model/user.model");
const CryptoJS = require("crypto-js");


const signupHandler = require("../controllers/signupContoller");
const loginHandler = require("../controllers/loginController");

const jwt = require("jsonwebtoken");
const router = express.Router();

router.route("/register").post(signupHandler);

router.route("/login").post(loginHandler);

module.exports = router;
