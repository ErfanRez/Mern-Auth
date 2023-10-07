import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const PORT = process.env.PORT || 3500;

dotenv.config();

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    console.log("Connected to MongoDB.");
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.connect(process.env.DATABASE_URI).then(() => {});

const app = express();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
