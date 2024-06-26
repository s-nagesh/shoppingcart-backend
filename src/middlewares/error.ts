import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/utility-class.js";
import { ControllerType } from "../types/types.js";

export const errorMiddleware = (
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.message ||= "Internal server error";
  err.statusCode ||= 500;

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

// wrapper function
export const TryCatch =
  (func: ControllerType) =>
      (req: Request, res: Response, next: NextFunction) => {
      // func is controller in function and pass to the params as a req,res,next
    return Promise.resolve(func(req,res,next)).catch(next);
  };
