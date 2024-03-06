const express = require("express");
const mongoose = require("mongoose");

const Hotel = require("../model/hotel.model");
const hotels = require("../data/hotels");

const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    await Hotel.deleteMany();
    const hotelsINDB = await Hotel.insertMany(hotels.data);
    res.json(hotelsINDB);
  } catch (err) {
    console.log(err)
    res.json({ message: "could not add data" });
  }
});

module.exports = router;
