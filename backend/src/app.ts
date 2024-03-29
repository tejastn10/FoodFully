import express, { json, Application, Request, Response } from "express";

import cors from "cors";
import "colors";
import { config } from "dotenv";

import admin from "firebase-admin";
const serviceAccount = require("../firebase.json");

import { connectDB } from "./config/db";

import { errorHandler, notFound } from "./middleware/error";

import { router as userRoutes } from "./router/user";
import { router as donationRoutes } from "./router/donation";
import { router as orderRoutes } from "./router/order";
import { router as nearbyRoutes } from "./router/nearby";

config();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app: Application = express();

connectDB();

app.use(cors());
app.use(json());

app.use("/api/users", userRoutes);
app.use("/api/donation", donationRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/nearby", nearbyRoutes);

app.use(notFound);
app.use(errorHandler);

app.get("/", (_req: Request, res: Response) =>
  res.send("API Running on Port 5000")
);

const PORT: string | number = process.env.PORT || 5000;
const ENV: string = process.env.NODE_ENV || "development";

app.listen(PORT, () =>
  console.log(
    ` 📡 Backend server: `.inverse.yellow.bold +
      ` Running in ${ENV} mode on port ${PORT}`
  )
);
