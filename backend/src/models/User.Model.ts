import { Schema, model } from "mongoose";
import { IUser } from "../@types/User";

import { compare, genSalt, hash } from "bcryptjs";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    contact :{
      type : String,
      required : true,
    },
    isAdmin : {
      type : Boolean,
      required : true,
      default : false,
    },
    isNgo: {
      type: Boolean,
      required: true,
      default: false,
    },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      pincode: { type: String, required: true },
      state: { type: String, required: true },
    },
  },
  { timestamps: true }
);

userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (this: IUser, next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await genSalt(10);
  this.password = await hash(this.password, salt);
});

export const User = model<IUser>("User", userSchema);