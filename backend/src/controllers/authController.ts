import { NextFunction, Request, Response } from "express";
import prisma from "../prisma/client";
import { loginSchema, registerSchema } from "../zodSchemas/userSchemas";
import { NotFoundError, ValidationError } from "../errors";
import bcrypt from "bcryptjs";
import { createUser, findUserByEmail } from "../prisma models/userModel";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export async function registerUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const validatedBody = registerSchema.safeParse(req.body);
  if (!validatedBody.success) {
    next(new ValidationError(validatedBody.error));
    return;
  }
  const { email, password } = validatedBody.data;

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    await createUser(email, hashPassword);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    next(error);
  }
}
export async function loginUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const validatedBody = loginSchema.safeParse(req.body);
  if (!validatedBody.success) {
    next(new ValidationError(validatedBody.error));
    return;
  }
  const { email, password } = validatedBody.data;
  try {
    const user = await findUserByEmail(email);
    if (!user) {
      next(new NotFoundError("Invalid credentials"));
      return;
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "24h",
      }
    );

    res.json({ token });
  } catch (error) {
    next(error);
  }
}
