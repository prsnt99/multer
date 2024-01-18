import dotenv from "dotenv";
import express from "express";
import mongoDb from "./config/db.js";
import router from "./router/index.js";

dotenv.config();

const app = express();

app.use(express.json())

mongoDb()

app.use("/",express.static("public"))

app.use("/api/v1",router)

app.listen(
  process.env.PORT,
  console.log(
    `Server is running on ${process.env.MODE} on port ${process.env.PORT}`
  )
);
