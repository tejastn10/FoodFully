import { Schema, model } from "mongoose";
import { IOrder } from "../@types/Order";

const donationSchema: Schema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Donation",
  },
  quantity: { type: String, required: true },
  description: { type: String, required: true },
});

const ngoSchema: Schema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: { type: String, required: true },
});

const hotelSchema: Schema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: { type: String, required: true },
  contact: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: String, required: true },
    state: { type: String, required: true },
  },
});

const orderSchema = new Schema<IOrder>({
  donation: donationSchema,
  hotel: hotelSchema,
  Ngo: ngoSchema,
  delivered: {
    type: Boolean,
    default: false,
  },
  deliveredOn: {
    type: Date,
    default: "",
  },
});
export const Order = model<IOrder>("Order", orderSchema);
