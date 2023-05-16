import express from "express";
import cors from "cors";
import morgan from "morgan";
import { robotsRouter } from "./routers/robotsRouter.js";
import {
  generalError,
  notFoundError,
} from "./middleware/errorController/errorControllers.js";
import auth from "./middleware/authControllers/authControllers.js";
import { userRouter } from "./routers/userRouter.js";

export const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://202304-w7ch1-judit-vives-front.netlify.app/",
];

const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(corsOptions));

app.disable("x-powered-by");

app.use(morgan("dev"));

app.use(express.json());

app.use("/login", userRouter);

app.use("/robots", auth, robotsRouter);

app.use(notFoundError);

app.use(generalError);
