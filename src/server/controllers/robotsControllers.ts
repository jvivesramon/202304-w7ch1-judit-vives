import { type Request, type Response } from "express";
import Robot from "../../database/schema/Robot.js";

export const getRobots = async (req: Request, res: Response) => {
  const robots = await Robot.find().exec();

  res.status(200).json({ robots });
};
