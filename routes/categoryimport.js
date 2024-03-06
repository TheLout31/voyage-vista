const express = require("express");
const mongoose = require("mongoose");

const Category = require("../model/category.model");
const categories = require("../data/categories");

const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    await Category.deleteMany();
    const categoriesINDB = await Category.insertMany(categories.data);
    res.json(categoriesINDB);
  } catch (err) {
    console.log(err)
    res.json({ message: "could not add data" });
  }
});

module.exports = router;
