const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./Admin_Module/routes/userRoutes");
require("dotenv").config();

mongoose
  .connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/users", userRoutes);

// Start Server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
