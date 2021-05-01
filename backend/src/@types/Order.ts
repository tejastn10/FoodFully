import { Document } from "mongoose";

export interface IOrder extends Document {
  donation: {
    _id: String;
    quantity: String;
    description: String;
  };
  Ngo: {
    _id: String;
    name: String;
  };
  hotel: {
    _id: String;
    name: String;
    contact: String;
    address: {
      street: string;
      city: string;
      pincode: string;
      state: string;
    };
  };
  delivered: Boolean;
  deliveredOn: Date;
}
