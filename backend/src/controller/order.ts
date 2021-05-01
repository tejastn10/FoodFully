import { Request, Response } from "express";
import { Donation } from "../models/Donation.Model";
import { Order } from "../models/Order.Model";
import { User } from "../models/User.Model";

export const postNewOrder = async (req: Request, res: Response) => {
  const { donationID, fcmToken } = await req.body;

  const user = await req.body.user;
  const tokens = [fcmToken];

  const userDonation = await Donation.findById(donationID);

  if (userDonation) {
    userDonation.accepted = true;
    userDonation.acceptedOn = <any>Date.now();
  } else {
    res.status(404);
    throw new Error("❌ Donation Not Found!");
  }

  const updatedDonation = await userDonation.save();

  const donation = {
    _id: updatedDonation._id,
    quantity: updatedDonation.quantity,
    description: updatedDonation.description,
  };

  // TODO: Add more cases
  if (user.isNgo === false) {
    res.status(401);
    throw new Error("Not a Ngo");
  }

  const Ngo = {
    _id: req.body.user._id,
    name: req.body.user.name,
  };

  const HotelUser = await User.findById(updatedDonation.hotel._id);

  const hotel = {
    _id: HotelUser?._id,
    name: HotelUser?.name,
    contact: HotelUser?.contact,
    address: HotelUser?.address,
  };

  const order = await Order.create({ donation, Ngo, hotel });


  if (order) {
    res.status(201).json(order);
  }
};

export const putUpdateOrder = async (req: Request, res: Response) => {
  const { order } = await req.body;

  const userOrder = await Order.findById(order);

  if (userOrder) {
    userOrder.delivered = true;
    userOrder.deliveredOn = <any>Date.now();
  } else {
    res.status(404);
    throw new Error("❌ Order Not Found!");
  }

  await userOrder.save();
};
