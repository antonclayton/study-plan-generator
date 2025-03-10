import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
  user?: { userId: string };
}

export function authMiddleware(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
      if (err) {
        res.status(403).json({ message: "Invalid token" }); //forbidden
        return;
      }
      if (
        typeof decoded === "object" &&
        decoded !== null &&
        "userId" in decoded
      ) {
        req.user = { userId: decoded.userId };
        next();
      } else {
        res.status(403).json({ message: "Invalid token payload" });
        return;
      }
    });
  } else {
    res.status(401).json({ message: "Authorization header missing" }); // unauthorized
    return;
  }
}
