import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyparse from "body-parser";
import morgan from "morgan";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyparse.urlencoded({ extended: false }));

const PORT = process.env.PORT || 2030;
const MongoDB_URL = process.env.MongoDB_URL;

import DBConfig from "./Backend/Config/DBConfig.js";
DBConfig(MongoDB_URL);

import Routes from "./Backend/Routes/Router.js";
app.use("/FoodTracker/api", Routes);

app.listen(PORT,
    () => console.log(`Project FoodTracker Server start On ${PORT} PORT No...!`));