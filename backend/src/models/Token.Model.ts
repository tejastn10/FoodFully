import { Schema, model } from "mongoose";
import { IToken } from "../@types/Token";

const tokenSchema = new Schema<IToken>({
  token: [String],
});
export const Token = model<IToken>("Token", tokenSchema);
