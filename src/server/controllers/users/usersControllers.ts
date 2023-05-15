import { type Response, type NextFunction } from "express";
import { type UserCredencialAlias } from "./types";
import jwt, { type JwtPayload } from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "../../../database/schema/User.js";
import CustomError from "../../CustomError.js";

const loginUser = async (
  req: UserCredencialAlias,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      const customError = new CustomError(401, "Wrong credentials");

      throw customError;
    }

    const tokenPayload: JwtPayload = {
      sub: user._id.toString(),
      name: user.username,
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET!, {
      expiresIn: "2d",
    });

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

export default loginUser;
