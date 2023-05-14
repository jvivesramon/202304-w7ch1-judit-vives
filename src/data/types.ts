import { type Types } from "mongoose";

interface RobotCapabilities {
  speed: number;
  endurance: number;
}

export interface RobotStructure {
  name: string;
  movie: string;
  image: string;
  year: number;
  description: string;
  capabilities: RobotCapabilities;
}

export interface RobotDatabaseStructure extends RobotStructure {
  id: string;
}

export interface RobotssDataStructure {
  robots: RobotStructure[];
}

export interface RobotsMockStructure extends RobotStructure {
  _id: Types.ObjectId;
}
