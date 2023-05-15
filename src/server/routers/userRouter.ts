import { Router } from "express";
import loginUser from "../controllers/users/usersControllers.js";

export const userRouter = Router();

userRouter.post("/login", loginUser);
