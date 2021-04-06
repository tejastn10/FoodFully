import { Request, Response } from "express";
import { Order } from "../models/Order.Model";

export const postNewOrder = async (req: Request, res: Response) => {
  const { donation } = await req.body;

  const Ngo = await req.body.user;

  // TODO: Add more cases
  if (Ngo.isNgo === false) {
    res.status(401);
    throw new Error("Not a Ngo");
  }

  const order = await Order.create({ donation, Ngo });

  if (order) {
    res.status(201).json(order);
  }
};
