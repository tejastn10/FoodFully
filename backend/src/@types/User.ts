import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  contact : string;
  isNgo?: boolean;
  address: {
    street: string;
    city: string;
    pincode: string;
    state: string;
  };
  matchPassword: (password: string) => string;
}