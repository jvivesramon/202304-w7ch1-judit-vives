import { Types } from "mongoose";
import { type RobotsMockStructure } from "./types.js";

export const robotsMock: RobotsMockStructure[] = [
  {
    _id: new Types.ObjectId(),
    name: "R2-D2",
    movie: "Star Wars",
    image: "#",
    description:
      "A courageous leader of the Autobots capable of transforming into a car",
    year: 2007,
    capabilities: {
      speed: 9,
      endurance: 8,
    },
  },
];

export const usernameMock = {
  username: "Jud",
  password: "nothing",
};
