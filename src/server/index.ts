import express from "express";
import morgan from "morgan";
import { robotsRouter } from "./routers/robotsRouter.js";
import { generalError, notFoundError } from "./middleware/errorControllers.js";

export const app = express();

app.disable("x-powered-by");

app.use(morgan("dev"));

app.use(express.json());

app.use(notFoundError);

app.use(generalError);

app.use("/robots", robotsRouter);
