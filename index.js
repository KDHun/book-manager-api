require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bookRoute = require("./api/routes/book");

mongoose.connect(process.env.DATABASE_URL);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();

app.use(express.json());

app.listen(process.env.PORT || 3002, () => {
  console.log(`Server Started at ${process.env.PORT}`);
});

app.use('/',bookRoute);

module.exports = app;