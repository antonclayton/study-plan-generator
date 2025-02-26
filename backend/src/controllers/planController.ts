import { NextFunction, Request, Response } from "express";
import prisma from "../prisma/client";
import { BadRequestError } from "../errors/BadRequestError";
import {
  createStudyPlanSchema,
  studyPlanIdSchema,
  updateStudyPlanSchema,
} from "../zodSchemas/studyPlanSchema";
import { ValidationError } from "../errors/ValidationError";
import { NotFoundError } from "../errors/NotFoundError";

export async function getAllStudyPlans(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const studyPlans = await prisma.studyPlan.findMany();
    res.status(200).json(studyPlans);
  } catch (error) {
    next(error);
  }
}

export async function createStudyPlan(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const validatedBody = createStudyPlanSchema.safeParse(req.body);
  if (!validatedBody.success) {
    next(new ValidationError(validatedBody.error));
    return;
  }
  const { goal } = validatedBody.data;
  try {
    const newStudyPlan = await prisma.studyPlan.create({
      data: {
        goal: goal,
        plan: "", // TODO: plan must be generated using goal and then passed into this function
      },
      select: {
        id: true,
        goal: true,
        plan: true,
        createdAt: true,
      },
    });
    res
      .status(201)
      .json({ message: "Study plan successfully created", data: newStudyPlan });
  } catch (error) {
    next(error);
  }
}

export async function updateStudyPlan(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const validatedBody = updateStudyPlanSchema.safeParse(req.body);
  if (!validatedBody.success) {
    next(new ValidationError(validatedBody.error));
    return;
  }
  const validatedParams = studyPlanIdSchema.safeParse(req.params);
  if (!validatedParams.success) {
    next(new ValidationError(validatedParams.error));
    return;
  }

  const { id } = validatedParams.data;
  try {
    const existingStudyPlan = await prisma.studyPlan.findUnique({
      where: { id },
    });
    if (!existingStudyPlan) {
      next(new NotFoundError("Study plan not found"));
      return;
    }

    const updatedStudyPlan = await prisma.studyPlan.update({
      where: { id },
      data: validatedBody.data,
      select: { id: true, goal: true, plan: true },
    });

    res.status(200).json({
      message: "Study plan successfully updated",
      studyPlan: updatedStudyPlan,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteStudyPlan(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const validatedParams = studyPlanIdSchema.safeParse(req.params);
  if (!validatedParams.success) {
    next(new ValidationError(validatedParams.error));
    return;
  }

  const { id } = validatedParams.data;

  try {
    const existingStudyPlan = await prisma.studyPlan.findUnique({
      where: { id },
    });
    if (!existingStudyPlan) {
      next(new NotFoundError("Study plan not found"));
      return;
    }

    await prisma.studyPlan.delete({
      where: { id },
    });
    res.status(200).json({ message: "Study plan deleted successfully" });
  } catch (error) {
    next(error);
  }
}
