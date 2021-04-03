import {Document} from "mongoose";

export interface IOrder extends Document{

    donation : String;
    Ngo : String;
    delivered : Boolean;
    deliveredOn : Date;
    
}