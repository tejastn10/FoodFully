import { Schema, model } from "mongoose";
import { IToken } from "../@types/Token";

const tokenSchema = new Schema<IToken>({
  ngo: {
    type: [String],
    required: true,
    default: [],
  },
  nonNgo: {
    type: [String],
    required: true,
    default: [],
  },
});
export const Token = model<IToken>("Token", tokenSchema);
