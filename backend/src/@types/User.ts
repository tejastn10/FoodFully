import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  contact: string;
  isAdmin: boolean;
  isNgo: boolean;
  address: {
    street: string;
    city: string;
    pincode: string;
    state: string;
  };
  matchPassword: (password: string) => string;
}
