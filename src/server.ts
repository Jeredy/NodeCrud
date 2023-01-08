import express from "express";
import { myDataSource } from "../ormconfig";
import "dotenv/config";
import {
  AuthRoutes,
  BannerRoutes,
  CategoryRoutes,
  VideoRoutes,
} from "./routes";

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
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

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NoMovies API",
      version: "1.0.0",
      description: "A Library API to project - NoMovies",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.routes.ts"],
};

const specs = swaggerJsDoc(options);

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(express.json());
app.use(AuthRoutes, BannerRoutes, CategoryRoutes, VideoRoutes);
app.use(cookieParser());

app.listen(3000, () => console.log("Server is running"));
