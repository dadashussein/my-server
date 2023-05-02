import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Product from "./models/Product.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Serverde xeta var" });
  }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  mongoose
    .connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log(`server ${PORT} portda baslatildi`))
    .then(() => console.log("connect to db"))
    .catch((error) => console.log(error));
});
