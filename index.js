import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productsRouter from "./routes/productsRouter.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/products", productsRouter);

const PORT = process.env.PORT || 9002;

app.listen(PORT, () => {
  mongoose
    .connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log(`server ${PORT} portda baslatildi`))
    .then(() => console.log("connect to db"))
    .catch((error) => console.log(error));
});
