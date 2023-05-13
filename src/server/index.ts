import express from "express";
import morgan from "morgan";
import { robotsRouter } from "./routers/robotsRouter.js";

export const app = express();

app.disable("x-powered-by");

app.use(morgan("dev"));

app.use(express.json());

app.use("/robots", robotsRouter);
