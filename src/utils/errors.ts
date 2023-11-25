// errors.ts
export enum ErrorCode {
  GENERIC_ERROR = 'GENERIC_ERROR',
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
  METHOD_NOT_ALLOWED = 'METHOD_NOT_ALLOWED',
  BAD_REQUEST = 'BAD_REQUEST',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
}

export const ErrorMessages: Record<ErrorCode, string> = {
  GENERIC_ERROR: 'An unexpected error occurred.',
  USER_NOT_FOUND: 'User not found.',
  UNAUTHORIZED: 'Unauthorized access.',
  FORBIDDEN: 'Access forbidden.',
  NOT_FOUND: 'Resource not found.',
  METHOD_NOT_ALLOWED: 'Method not allowed for this resource.',
  BAD_REQUEST: 'Bad request.',
  INTERNAL_SERVER_ERROR: 'Internal server error.',
};

export const HttpStatusCodes: Record<ErrorCode, number> = {
  GENERIC_ERROR: 500,
  USER_NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
};