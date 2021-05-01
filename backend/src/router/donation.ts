import { Router } from "express";
import asyncHandler from "express-async-handler";
import { postNewDonation, getRecentDonations } from "../controller/donation";
import { protect } from "../middleware/auth";

export const router: Router = Router();

//@desc     Create a new donation
//@route    POST /api/donation
//@access   Private
router.post("/", asyncHandler(protect), asyncHandler(postNewDonation));

//@desc     Get recent donation
//@route    GET /api/donation
//@access   Private
router.get("/", asyncHandler(protect), asyncHandler(getRecentDonations));
