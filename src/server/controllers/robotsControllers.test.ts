import { type Response, type Request } from "express";
import { getRobots } from "./robotsControllers.js";
import Robot from "../../database/schema/Robot.js";
import robotsMock from "../../data/robotsMock.js";

describe("Given a getRobots controller", () => {
  describe("When it receives a response", () => {
    type CustomResponse = Pick<Response, "status" | "json">;

    const next = jest.fn();

    const request = {};

    const response: CustomResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    Robot.find = jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue(robotsMock),
    });

    test("Then it should call the response method status with 200", async () => {
      const expectedStatusCode = 200;

      await getRobots(request as Request, response as Response, next);

      expect(response.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's method json with a list of robots", async () => {
      const expectedResponseBody = { robots: robotsMock };

      await getRobots(request as Request, response as Response, next);

      expect(response.json).toHaveBeenCalledWith(expectedResponseBody);
    });
  });
});
