const express = require("express");

const mongoose = require("mongoose");

const dotenv = require("dotenv");

const productsRoutes = require("./routes/productRoutes");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/", productsRoutes);

mongoose
  .connect(process.env.MONGODB_URL)

  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => {
      console.log("Server is running in port 5000");
    });
  })
  .catch(() => {
    console.log("Error connecting to database:", error.message);
  });
