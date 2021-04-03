import {Request , Response} from "express";
import { User } from "../models";

export const getNearbyNgo =async(req : Request,res : Response) => {
    const users = await User.find({});
    const Ngo = users.filter((ngo)=>ngo.isNgo);
    res.json(Ngo);    
}
