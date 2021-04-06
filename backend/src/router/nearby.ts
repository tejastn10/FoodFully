import { Router } from "express";
import asyncHandler from "express-async-handler";
import { getNearbyHotel, getNearbyNgo } from "../controller/nearby";
import { protect } from "../middleware/auth";

export const router: Router = Router();

//@desc     Get Nearby Hotels
//@route    GET /api/nearby/hotel
//@access   Private
router.get("/hotel", asyncHandler(protect), asyncHandler(getNearbyHotel));

//@desc     Get Nearby NGOs
//@route    GET /api/nearby/ngo
//@access   Private
router.get("/ngo", asyncHandler(protect), asyncHandler(getNearbyNgo));
