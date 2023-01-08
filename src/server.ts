import express from "express";
import { myDataSource } from "../ormconfig";
import "dotenv/config";
import {
  AuthRoutes,
  BannerRoutes,
  CategoryRoutes,
  VideoRoutes,
} from "./routes";

const cookieParser = require("cookie-parser");
// establish database connection
myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();

app.use(express.json());
app.use(AuthRoutes, BannerRoutes, CategoryRoutes, VideoRoutes);
app.use(cookieParser());

app.listen(3000, () => console.log("Server is running"));
