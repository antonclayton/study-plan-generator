import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { DatabaseError } from "../errors/DatabaseError";
import prisma from "../prisma/client";

export async function createUser(email: string, password: string) {
  try {
    return await prisma.user.create({
      data: {
        email,
        password,
      },
    });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        // Unique constraint violation (e.g., duplicate email)
        throw new Error("Email address already in use.");
      }
      // Other Prisma errors
      console.error("Prisma Error (Create User):", error);
      throw new DatabaseError("Database operation failed.");
    } else {
      // Non-Prisma errors
      console.error("Unexpected Error (Create User):", error);
      throw new DatabaseError("An unexpected error occurred.");
    }
  }
}

export async function findUserByEmail(email: string) {
  try {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      // Prisma errors
      console.error("Prisma Error (Find User):", error);
      throw new DatabaseError("Database operation failed.");
    } else {
      // Non-Prisma errors
      console.error("Unexpected Error (Find User):", error);
      throw new DatabaseError("An unexpected error occurred.");
    }
  }
}
