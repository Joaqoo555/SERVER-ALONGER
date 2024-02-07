import { NextFunction, Response, Request } from "express";
import { HttpError } from "http-errors";

export const ErrorCatchEndware = (
  err: HttpError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  return res.status(status).send(message);
};

export const HandlerErrorResponse = (
  res: Response,
  message: string,
  error: HttpError,
  status: number
) => {
  const errorJson = {
    status,
    message,
    error,
  };
  return res.status(status).json(errorJson);
};