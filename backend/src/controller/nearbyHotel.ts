import {Request , Response} from "express";
import { User } from "../models";

export const getNearbyHotel =async(req : Request,res : Response) => {
    const users = await User.find({});
    const Hotel = users.filter((hotel)=>hotel.isNgo===false)
    res.json(Hotel);    
}
