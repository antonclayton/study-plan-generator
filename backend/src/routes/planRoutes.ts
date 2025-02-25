import { Router } from "express";
import {
  createStudyPlan,
  deleteStudyPlan,
  getAllStudyPlans,
  updateStudyPlan,
} from "../controllers/planController";

const router = Router();

// GET
router.get("/", getAllStudyPlans);

// POST
router.post("/", createStudyPlan);

// UPDATE
router.patch("/:id", updateStudyPlan);

// DELETE
router.delete("/:id", deleteStudyPlan);

export default router;
