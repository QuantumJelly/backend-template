import { Response } from 'express';

interface APIResponse {
  status: number,
  message?: string,
  data?: any,
}

export const sendResponse = (res: Response, status: number, message?: string, data?: any) => {
  const responseBody: APIResponse = {
    status,
    message,
    data,
  };

  res.json(responseBody);
};
