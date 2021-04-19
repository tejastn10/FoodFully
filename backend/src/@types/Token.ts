import { Document } from "mongoose";

export interface IToken extends Document {
  ngo: [String];
  nonNgo: [String];
}
