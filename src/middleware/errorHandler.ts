import { Request, Response, NextFunction } from 'express';
import { ErrorCode, HttpStatusCodes } from '../utils/errors';

export const errorHandlerMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  let errorCode: ErrorCode = ErrorCode.GENERIC_ERROR;

  res.status(HttpStatusCodes[errorCode]).json({
    error: {
      code: errorCode,
      message: err.message || 'An unexpected error occurred.',
    },
  });
};