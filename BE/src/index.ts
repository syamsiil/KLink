// import "dotenv/config"; // Impor dan gunakan dotenv
import { AppDataSource } from "./data-source";
import * as express from "express";
import { Request, Response } from "express";
import router from "./routes";
import * as dotenv from "dotenv";

dotenv.config();

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const port = 5000;

    const cors = require("cors");

    app.use(cors());
    app.use(express.json());
    app.use("/api/v1", router);
    app.get("/", (req: Request, res: Response) => {
      res.send("This is Me!");
    });

    app.listen(port, () => {
      console.log(`server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));
