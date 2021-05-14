import { Router } from "express";
import asyncHandler from "express-async-handler";
import {
  postNewDonation,
  getRecentDonations,
  getAllDonations,
} from "../controller/donation";
import { admin, protect } from "../middleware/auth";

export const router: Router = Router();

//@desc     Create a new donation
//@route    POST /api/donation
//@access   Private
router.post("/", asyncHandler(protect), asyncHandler(postNewDonation));

//@desc     Get recent donation
//@route    GET /api/donation
//@access   Private
router.get("/", asyncHandler(protect), asyncHandler(getRecentDonations));

// @desc     Get all donations
// @route    GET /api/donation/all
// @access   Private/Admin
router.get(
  "/all",
  asyncHandler(protect),
  asyncHandler(admin),
  asyncHandler(getAllDonations)
);
