import { Schema, model } from "mongoose";
import { IDonation } from "../@types/Donation";

const hotelSchema: Schema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: { type: String, required: true },
});

const donationSchema = new Schema<IDonation>({
  hotel: hotelSchema,
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
    default: false,
  },
  acceptedOn: {
    type: Date,
    default: "",
  },
  token: {
    type: String,
  },
});

export const Donation = model<IDonation>("Donation", donationSchema);
