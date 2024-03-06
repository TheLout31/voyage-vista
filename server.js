const express = require("express");
const mongoose = require("mongoose");

const hotelDataAddedToDBRouter = require("./routes/dataimport.router");
const categoryDataAddedToDBRouter = require("./routes/categoryimport");

const hotelRouter = require("./routes/hotelrouter");
const categoryRouter = require("./routes/category.router");
const singleHotelRouter = require("./routes/singlehotel.router")
const authRouter = require("./routes/auth.router")

const connectDB = require("./config/dbconfig");
const app = express();

app.use(express.json());
connectDB();

const PORT = 3500;

app.get("/", (req, res) => {
  res.send("hello ");
});

app.use("/api/hoteldata", hotelDataAddedToDBRouter);
app.use("/api/categorydata", categoryDataAddedToDBRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/category", categoryRouter);
app.use("/api/hotels", singleHotelRouter);
app.use("/api/auth", authRouter);

mongoose.connection.once("open", () => {
  console.log("connected to DB");
  app.listen(process.env.PORT || PORT, () => {
    console.log("server is running");
  });
});
