import { Router } from "express";
import {
  createStudyPlan,
  deleteStudyPlan,
  getAllStudyPlans,
  updateStudyPlan,
} from "../controllers/planController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

// GET
router.get("/", authMiddleware, getAllStudyPlans);

// POST
router.post("/", authMiddleware, createStudyPlan);

// UPDATE
router.patch("/:id", updateStudyPlan);

// DELETE
router.delete("/:id", deleteStudyPlan);

export default router;
