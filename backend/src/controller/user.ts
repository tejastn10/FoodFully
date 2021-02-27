import {Request , Response} from "express";
import {generateToken} from "../utlis/generateToken"

import {User} from "./../models";

// login user 
export const postAuthUser = async (req: Request, res: Response) => {
    const { email, password } = await req.body;
  
    const user = await User.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name : user.name,
        isNgo: user.isNgo,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("❗ Invalid Email or Password!");
    }
  };

  //getuserprofile
  export const getUserProfile = async (req: Request, res: Response) => {
    const user = await User.findById(req.body.user._id);
  
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        contact : user.contact,
        isNgo: user.isNgo,
        street : user.address.street,
        city : user.address.city,
        pincode :user.address.pincode,
        state:user.address.state,
      });
    } else {
      res.status(404);
      throw new Error("❌ User Not Found!");
    }
  };

  //updateuser profile
  export const putUpdateUser = async (req: Request, res: Response) => {
    const user = await User.findById(req.body.user._id);
  
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.contact = req.body.contact || user.contact;
      user.address.street = req.body.street || user.address.street;
      user.address.city = req.body.city || user.address.city;
      user.address.pincode = req.body.pincode || user.address.pincode;
      user.address.state = req.body.state || user.address.state;
      
  
      if (req.body.password) {
        user.password = req.body.password;
      }
  
      const updatedUser = await user.save();
  
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isNgo: updatedUser.isNgo,
        contact : updatedUser.contact,
        street : updatedUser.address.street,
        city : updatedUser.address.city,
        pincode : updatedUser.address.pincode,
        state : updatedUser.address.state,
        token: generateToken(updatedUser._id),
      });
    } else {
      res.status(404);
      throw new Error("❌ User Not Found!");
    }
  };
  
  //register a new user
  export const postRegisterUser = async (req: Request, res: Response) => {
    const { name, email, password, contact, isNgo, street, city, pincode, state } = await req.body;
  
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400);
      throw new Error("❗ User Already Registered!");
    }

    const address = {street, city, pincode, state}

    const user = await User.create({ name, email, password, contact, isNgo, address });
  
    if (user) {
      res.status(201).json({
        _id: user._id,
        name : user.name,
        isNgo: user.isNgo,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("❗ Invalid User data!");
    }
  };
  