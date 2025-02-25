import { z } from "zod";

export const studyPlanIdSchema = z.object({
  // use this to validate user id
  id: z.string().uuid(),
});

export const createStudyPlanSchema = z.object({
  goal: z
    .string()
    .min(2, "Goal must be at least 2 characters long")
    .max(50, "Goal cannot exceed 50 characters"),
  plan: z.string().optional(),
});

export const updateStudyPlanSchema = z.object({
  goal: z
    .string()
    .min(2, "Goal must be at least 2 characters long")
    .max(50, "Goal cannot exceed 50 characters")
    .optional(),
  plan: z.string().optional(),
});
