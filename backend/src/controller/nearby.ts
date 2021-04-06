import { Request, Response } from "express";
import { User } from "../models/User.Model";

// TODO: Add proper filter
export const getNearbyHotel = async (_req: Request, res: Response) => {
  const users = await User.find({});
  const Hotel = users.filter((hotel) => hotel.isNgo === false);
  res.json(Hotel);
};

export const getNearbyNgo = async (_req: Request, res: Response) => {
  const users = await User.find({});
  const Ngo = users.filter((ngo) => ngo.isNgo);
  res.json(Ngo);
};
