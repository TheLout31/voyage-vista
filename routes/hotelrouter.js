const express = require("express");
const router = express.Router();

const Hotel = require("../model/hotel.model");

router.route("/").get(async (req, res) => {
  const hotelCategory = req.query.category;
  try {
    let hotels;
    if (hotelCategory) {
      hotels = await Hotel.find({ category: hotelCategory });
    } else {
      hotels = await Hotel.find({});
    }
    hotels = await Hotel.find();
    hotels
      ? res.json(hotels)
      : res.statusMessage(404).json({ message: "No data found" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
