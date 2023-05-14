import createDebug from "debug";
import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../CustomError.js";

const debugError = createDebug("robots-api:server:middleware:errorControllers");

export const notFoundError = (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  const error = new CustomError(404, "Endpoint not found");

  next(error);
};

export const generalError = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  debugError(error.message);

  const statusCode = error.status || 500;
  const messageError = error.status ? error.message : "General error";

  res.status(statusCode).json({ messageError });
};
