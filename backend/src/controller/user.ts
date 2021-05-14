import { Request, Response } from "express";
import { Donation } from "../models/Donation.Model";
import { Order } from "../models/Order.Model";
import { generateToken } from "../utils/generateToken";

import { User } from "./../models/User.Model";

export const postAuthUser = async (req: Request, res: Response) => {
  const { email, password } = await req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      isAdmin: user.isAdmin,
      isNgo: user.isNgo,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("❗ Invalid Email or Password!");
  }
};

export const getUserProfile = async (req: Request, res: Response) => {
  const user = await User.findById(req.body.user._id);

  if (user) {
    res.json({
      name: user.name,
      email: user.email,
      contact: user.contact,
      isAdmin: user.isAdmin,
      isNgo: user.isNgo,
      address: user.address,
    });
  } else {
    res.status(404);
    throw new Error("❌ User Not Found!");
  }
};

export const putUpdateUser = async (req: Request, res: Response) => {
  const user = await User.findById(req.body.user._id);

  if (user) {
    user.contact = req.body.contact || user.contact;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      isNgo: updatedUser.isNgo,
      contact: updatedUser.contact,
      address: updatedUser.address,
    });
  } else {
    res.status(404);
    throw new Error("❌ User Not Found!");
  }
};

export const postRegisterUser = async (req: Request, res: Response) => {
  const {
    name,
    email,
    password,
    contact,
    isNgo,
    isAdmin,
    street,
    city,
    pincode,
    state,
  } = await req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("❗ User Already Registered!");
  }

  const address = { street, city, pincode, state };

  const Admin = isAdmin ? isAdmin : false;

  const user = await User.create({
    name,
    email,
    password,
    contact,
    isNgo,
    isAdmin: Admin,
    address,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      isAdmin: user.isAdmin,
      isNgo: user.isNgo,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("❗ Invalid User data!");
  }
};

export const getHistory = async (req: Request, res: Response) => {
  const user = await User.findById(req.body.user._id);

  if (user) {
    if (user.isNgo) {
      const orders = await Order.find({ Ngo: user as any });
      res.json(orders);
    } else {
      const donations = await Donation.find({ hotel: user as any });
      res.json(donations);
    }
  } else {
    res.status(404);
    throw new Error("❌ User Not Found!");
  }
};

export const getUsers = async (_req: Request, res: Response) => {
  const users = await User.find({});
  res.json(users);
};

export const putUpdateUserById = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.isAdmin = req.body.isAdmin;

    await user.save();

    res.json({ message: "✅ User Privileges updated" });
  } else {
    res.status(404);
    throw new Error("❌ User Not Found!");
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "🗑 User deleted!" });
  } else {
    res.status(404);
    throw new Error("❌ User Not found!");
  }
};
