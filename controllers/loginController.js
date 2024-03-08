const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const User = require("../model/user.model");

const loginHandler = async (req, res) => {
  try {
    const user = await User.findOne({ number: req.body.number });
    if (!user) {
      return res.status(401).json({ message: "Invalid Mobile Number" });
    }

    const decodedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);

    if (decodedPassword !== req.body.password) {
      return res.status(401).json({ message: "Incorrect Password" });
    }

    const { password, ...rest } = user._doc;
    const accessToken = jwt.sign(
      { id: user.username },
      process.env.ACCESS_TOKEN
    );
    console.log(decodedPassword);
    return res.json({ ...rest, accessToken });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = loginHandler;
