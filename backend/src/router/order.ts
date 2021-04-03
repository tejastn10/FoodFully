import {Router} from "express";
import asyncHandler from "express-async-handler"
import {postNewOrder} from "../controller/order"
import {protect} from "../middleware/auth"

export const router : Router = Router();

//@desc      post new order
//@route     POST/api/order
//@access    private 
router.post("/",asyncHandler(protect),asyncHandler(postNewOrder));
