import { Document } from "mongoose";

export interface IDonation extends Document {
  hotel: {
    _id: String;
    name: String;
  };
  isUrgent: Boolean;
  quantity: String;
  description: String;
  bestBefore: String;
  donatedOn: Date;
  accepted: Boolean;
  acceptedOn: Date;
  token: String;
}
