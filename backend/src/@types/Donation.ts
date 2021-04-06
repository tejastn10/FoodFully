import { Document } from "mongoose";

export interface IDonation extends Document {
  hotel: string;
  isUrgent: Boolean;
  quantity: string;
  description: string;
  bestBefore: string;
  donatedOn: Date;
  accepted: Boolean;
  acceptedOn: Date;
}
