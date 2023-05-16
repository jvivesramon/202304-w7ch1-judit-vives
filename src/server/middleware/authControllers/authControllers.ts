import { type NextFunction, type Request, type Response } from "express";
import jwt from "jsonwebtoken";
import CustomError from "../../../types/CustomError.js";

const auth = (req: Request, _res: Response, next: NextFunction) => {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader?.includes("Bearer")) {
      const error = new CustomError(401, "Missing token");

      throw error;
    }

    const token = authHeader.replace("Bearer ", "");

    jwt.verify(token, process.env.JWT_SECRETS!);

    next();
  } catch (error: unknown) {
    next(error);
  }
};

export default auth;
