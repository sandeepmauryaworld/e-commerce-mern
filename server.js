import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

// configure env if .enf file is on other folder then need to give path  like dotenv.config({'./'})
dotenv.config();

// database config
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// rest api

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to E-commerce MERN</h1>`);
});

// port
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
  console.log(
    `server running on ${process.env.DEV_MODE} mode on port ${PORT} `.bgCyan.red
  );
});
