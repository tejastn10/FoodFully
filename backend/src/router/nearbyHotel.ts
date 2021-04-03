import {Router} from "express";
import asyncHandler from "express-async-handler"
import {getNearbyHotel} from "../controller/nearbyHotel"
import {protect} from "../middleware/auth"

export const router: Router = Router();

//@desc     create a new donation
//@route    get/api/nearbyhotel
//@access   private
router.get("/", asyncHandler(protect), asyncHandler(getNearbyHotel));
