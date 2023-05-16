import { type Response } from "express";
import { type UserCredencialAlias } from "./types";
import loginUser from "./usersControllers";
import { User } from "../../../database/schema/User";
import { usernameMock } from "../../../data/robotsMock";

describe("Given an loginUser controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call the response method status with a 200", async () => {
      const expectedStatusCode = 200;

      type CustomResponse = Pick<Response, "status" | "json">;

      const res: CustomResponse = {
        status: jest.fn(),
        json: jest.fn(),
      };

      const req = {
        body: {
          username: "Jud",
          password: "nothing",
        },
      };

      const next = jest.fn();

      User.findOne = jest.fn().mockResolvedValue({
        exec: jest.fn().mockResolvedValue(usernameMock),
      });

      await loginUser(req as UserCredencialAlias, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });
});
