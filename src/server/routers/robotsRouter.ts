import { Router } from "express";
import { getRobots } from "../controllers/robots/robotsControllers.js";

export const robotsRouter = Router();

robotsRouter.get("/", getRobots);
