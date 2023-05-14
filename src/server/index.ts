import express from "express";
import cors from "cors";
import morgan from "morgan";
import { robotsRouter } from "./routers/robotsRouter.js";
import { generalError, notFoundError } from "./middleware/errorControllers.js";

export const app = express();

const corsOptions = {
  origin:
    "mongodb+srv://jvivesramon:fantasia@fantasia.w5j49w4.mongodb.net/robotsIJ",
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
