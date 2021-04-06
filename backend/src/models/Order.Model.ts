import { Schema, model } from "mongoose";
import { IOrder } from "../@types/Order";
import { Donation } from "./Donation.Model";
import { User } from "./User.Model";

const orderSchema = new Schema<IOrder>({
  donation: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Donation,
  },
  Ngo: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: User,
  },
  delivered: {
    type: Boolean,
    default: false,
  },
  deliveredOn: {
    type: Date,
  },
});
export const Order = model<IOrder>("Order", orderSchema);
