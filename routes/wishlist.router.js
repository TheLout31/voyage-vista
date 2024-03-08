const express = require("express");
const wishlistController = require("../controllers/wishlistController");
const verifyUser = require("../middleware/verifyUser");
const router = express.Router();
const { createWishlistHandler, deleteWishlistHandler, getWishlistHandler } = wishlistController;

router.route("/")
    .post(verifyUser, createWishlistHandler)

router.route("/:id")
    .delete(verifyUser, deleteWishlistHandler)

router.route("/")
    .get(verifyUser, getWishlistHandler)

module.exports = router;
