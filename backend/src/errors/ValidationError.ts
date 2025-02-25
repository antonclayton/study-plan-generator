import { CustomError } from "../utils/CustomError";
import { z } from "zod";

export class ValidationError extends CustomError {
  StatusCode = 400;
  constructor(public errors: z.ZodError) {
    super("Invalid input data");
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
  serialize(): { message: string; errors: any } {
    const formattedErrors = this.errors.errors.map((err) => ({
      field: err.path.join("."), // "goal" or nested paths like "user.email"
      message: err.message,
    }));
    return { message: this.message, errors: formattedErrors };
  }
}
