import { Router } from "express";
import {
  createStudyPlan,
  getAllStudyPlans,
} from "../controllers/planController";

const router = Router();

// GET
router.get("/", getAllStudyPlans);

// POST
router.post("/", createStudyPlan);

export default router;
