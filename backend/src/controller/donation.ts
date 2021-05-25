import { Request, Response } from "express";
import { Donation } from "../models/Donation.Model";
import admin from "firebase-admin";
import { Token } from "../models/Token.Model";

export const postNewDonation = async (req: Request, res: Response) => {
  const { isUrgent, quantity, description, bestBefore, fcmToken } =
    await req.body;

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

  const token = fcmToken
    ? fcmToken
    : "fKybcz34TJWgHMHKyQbyq5:APA91bH43aNFLxEwBLg1Z6jamqKTVaM3x20eQrbbUWhevMXUum32gYN3tpJ4z3_FwGKG3EgQcbK8foiAXeE8yHd3RQP5vQm2xMZCloH6okkPvPgRbTa7pWJCGgr1bxd6vnZYrBbUrPNF";

  const donation = await Donation.create({
    hotel,
    isUrgent,
    quantity,
    description,
    bestBefore,
    token,
  });

  const tokens = await Token.findById("60a5126833228520d579a426");

  if (tokens) {
    await admin.messaging().sendMulticast({
      tokens: tokens.token as any,
      notification: {
        title: "New Donation Availabele",
        body: "Please Take a look",
      },
    });
  }
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

export const getAllDonations = async (_req: Request, res: Response) => {
  const donations = await Donation.find({}).populate("user", "id name");
  res.json(donations);
};
