import { type Response, type Request } from "express";
import jwt from "jsonwebtoken";
import auth from "./authControllers.js";
import CustomError from "../CustomError.js";

describe("Given an auth controller", () => {
  const res = {};
  const next = jest.fn();

  const token = "token";

  const req: Pick<Request, "header"> = {
    header: jest.fn().mockReturnValue(`Bearer ${token}`),
  };

  describe("When it receives an authorization header with a valid token and a next function", () => {
    test("Then it should call the received next function", () => {
      jwt.verify = jest.fn();

      auth(req as Request, res as Response, next);

      expect(next).toHaveBeenCalled();
    });
  });

  describe("When it receives an authorization header with an invalid token and a next function", () => {
    test("Then it should call the received next function with a 401 'Inavlid token' error", () => {
      const expectedError = new CustomError(401, "Invalid token");

      jwt.verify = jest.fn().mockImplementation(() => {
        throw expectedError;
      });

      auth(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(expectedError);
    });
  });
});
