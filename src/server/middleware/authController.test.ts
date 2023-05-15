import { type Response, type Request } from "express";
import jwt from "jsonwebtoken";
import auth from "./authControllers.js";

describe("Given an auth controller", () => {
  describe("When it receives an authorization header with a valid token and a next function", () => {
    test("Then it should call the received next function", () => {
      const token = "token";

      const req: Pick<Request, "header"> = {
        header: jest.fn().mockReturnValue(`Bearer ${token}`),
      };

      const res = {};
      const next = jest.fn();

      jwt.verify = jest.fn();

      auth(req as Request, res as Response, next);

      expect(next).toHaveBeenCalled();
    });
  });
});
