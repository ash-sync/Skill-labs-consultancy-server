import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { JwtPayload } from "jsonwebtoken";
import { envVars } from "../config/env";

import { verifyToken } from "../utils/jwt";
import { AppError } from "../errorHelpers/AppError";
import { User } from "../modules/User/user.model";


export const checkAuth =
  (...authRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;
      const cookieToken = req.cookies?.accessToken;

      const accessToken = authHeader || cookieToken;

      if (!accessToken) {
        throw new AppError(httpStatus.UNAUTHORIZED, "No Token Received");
      }


      const token = accessToken.startsWith("Bearer ")
        ? accessToken.split(" ")[1]
        : accessToken;

      if (!token) {
        throw new AppError(httpStatus.UNAUTHORIZED, "Invalid token");
      }


      const verifiedToken = verifyToken(
        token,
        envVars.JWT_SECRET
      ) as JwtPayload & { email: string; role?: string };


      if (!verifiedToken?.email) {
        throw new AppError(httpStatus.UNAUTHORIZED, "Invalid token payload");
      }


      const isUserExist = await User.findOne({
        email: verifiedToken.email,
      });

      if (!isUserExist) {
        throw new AppError(httpStatus.NOT_FOUND, "User does not exist");
      }

      if (authRoles.length > 0 && !authRoles.includes(verifiedToken.role || isUserExist.role)) {
        throw new AppError(httpStatus.FORBIDDEN, "You are not authorized to perform this action");
      }

     
      req.user = verifiedToken;

      next();
    } catch (error) {
      console.log("jwt error:", error);
      next(error);
    }
  };