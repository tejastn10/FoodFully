import {Router} from "express";
import asyncHandler from "express-async-handler"
import {getNearbyNgo} from "../controller/nearbyNgo"
import {protect} from "../middleware/auth"

export const router: Router = Router();

//@desc     create a new donation
//@route    get/api/nearbyngo
//@access   private
router.get("/", asyncHandler(protect), asyncHandler(getNearbyNgo));

