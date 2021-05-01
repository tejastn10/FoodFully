import { Request, Response } from "express";
import { Donation } from "../models/Donation.Model";

export const postNewDonation = async (req: Request, res: Response) => {
  const { isUrgent, quantity, description, bestBefore } = await req.body;

  const user = await req.body.user;

  // TODO: Add more cases
  if (user.isNgo) {
    res.status(401);
    throw new Error("Not Authourized");
  }

  const hotel = {
    _id: req.body.user._id,
    name: req.body.user.name,
  };

  const token = fcmToken ? fcmToken : "";

  const donation = await Donation.create({
    hotel,
    isUrgent,
    quantity,
    description,
    bestBefore,
  });

  if (donation) {
    res.status(201).json(donation);
  }
};

export const getRecentDonations = async (req: Request, res: Response) => {
  const donations = await Donation.find({});
  const RecentDonations = donations.filter(
    (donation) => donation.accepted === false
  );
  res.json(RecentDonations);
};
