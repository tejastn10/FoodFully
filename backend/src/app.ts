import express, { json, Application, Request, Response } from "express";
import cors from "cors";
import "colors";
import { config } from "dotenv";

config();

const app: Application = express();

app.use(cors());
app.use(json());

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
