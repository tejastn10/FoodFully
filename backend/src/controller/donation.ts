import { Request, Response } from "express";
import { Donation } from "../models/Donation.Model";

export const postNewDonation = async (req: Request, res: Response) => {
  const { isUrgent, quantity, description, bestBefore } = await req.body;

  const hotel = await req.body.user;

  // TODO: Add more cases
  if (hotel.isNgo) {
    res.status(401);
    throw new Error("Not Authourized");
  }

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
