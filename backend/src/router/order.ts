import { Router } from "express";
import asyncHandler from "express-async-handler";
import {
  postNewOrder,
  getAllOrders,
  putUpdateOrder,
} from "../controller/order";
import { admin, protect } from "../middleware/auth";

export const router: Router = Router();

//@desc      Create new order
//@route     POST /api/order
//@access    Private
router.post("/", asyncHandler(protect), asyncHandler(postNewOrder));

// @desc     Get all Orders
// @route    GET /api/order/all
// @access   Private/Admin
router.get(
  "/all",
  asyncHandler(protect),
  asyncHandler(admin),
  asyncHandler(getAllOrders)
);

// @desc     Update order to be Delivered
// @route    PUT /api/order/:id
// @access   Private/Admin
router.put(
  "/:id",
  asyncHandler(protect),
  asyncHandler(admin),
  asyncHandler(putUpdateOrder)
);
