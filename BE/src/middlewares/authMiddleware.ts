import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  const token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer")) {
    return res.status(401).json({ error: "You have not logged in" });
  }

  const tokens = token.split(" ")[1];
  // console.log("This is the token", tokens);

  try {
    const loginSession = jwt.verify(tokens, "secretKey");
    console.log("This is session: ", loginSession);
    res.locals.loginSession = loginSession;
    next();
  } catch (err) {
    res.status(401).json({ error: "Token is not valid" });
  }
};

export default verifyToken;
