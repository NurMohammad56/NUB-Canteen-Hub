import express from "express";
import {
  placeOrder,
  getUserOrders,
  getOrder,
  cancelOrder,
  getAllOrders,
  updateOrderStatus,
  getOrderStats,
  deleteOrderHistory,
} from "../controllers/order.controller.js";
import { protect, authorize } from "../middleware/auth.middleware.js";

const router = express.Router();

// Student routes (protected)
router.use(protect);

router.post("/", placeOrder);
router.get("/", getUserOrders);
router.get("/:id", getOrder);
router.put("/:id/cancel", cancelOrder);

// Admin routes
router.get("/admin/all", authorize("admin"), getAllOrders);
router.put("/:id/status", authorize("admin"), updateOrderStatus);
router.delete("/admin/:id", authorize("admin"), deleteOrderHistory);
router.get("/admin/stats", authorize("admin"), getOrderStats);

export default router;
