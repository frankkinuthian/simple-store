import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/products", (req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => {
    connectDB();
  console.log("Server is running on port 5000");
});



