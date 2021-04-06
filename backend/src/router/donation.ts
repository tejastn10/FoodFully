import { Router } from "express";
import asyncHandler from "express-async-handler";
import { postNewDonation } from "../controller/donation";
import { protect } from "../middleware/auth";

export const router: Router = Router();

//@desc     Create a new donation
//@route    POST /api/donation
//@access   Private
router.post("/", asyncHandler(protect), asyncHandler(postNewDonation));
