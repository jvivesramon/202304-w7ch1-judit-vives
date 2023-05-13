import { type Request, type Response } from "express";
import Robot from "../../database/schema/Robot";

export const getStudents = async (req: Request, res: Response) => {
  const robots = await Robot.find().exec();

  res.status(200).json({ robots });
};
