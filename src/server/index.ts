import express from "express";
import cors from "cors";
import morgan from "morgan";
import { robotsRouter } from "./routers/robotsRouter.js";
import { generalError, notFoundError } from "./middleware/errorControllers.js";

export const app = express();

const allowedHeaders = "https://202304-w6chwe-judit-vives-isaias.netlify.app/";

const corsOptions = {
  origin: allowedHeaders,
  optionsSuccessStatus: 200,
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  allowedHeaders: "Content-Type, Authorization",
};

app.use(cors(corsOptions));

app.disable("x-powered-by");

app.use(morgan("dev"));

app.use(express.json());

app.use("/robots", robotsRouter);

app.use(notFoundError);

app.use(generalError);
