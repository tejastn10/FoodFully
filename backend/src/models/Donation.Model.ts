import { Schema, model } from "mongoose";
import { User } from "./User.Model";
import { IDonation } from "../@types/Donation";

const donationSchema = new Schema<IDonation>({
  hotel: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: User,
  },
  isUrgent: {
    type: Boolean,
    required: true,
    default: false,
  },
  quantity: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  bestBefore: {
    type: String,
    required: true,
  },
  donatedOn: {
    type: Date,
    default: Date.now(),
  },
  accepted: {
    type: Boolean,
    default: true,
  },
  acceptedOn: {
    type: Date,
    default: Date.now(),
  },
});

export const Donation = model<IDonation>("Donation", donationSchema);
