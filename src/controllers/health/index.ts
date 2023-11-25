import { Request, Response } from 'express';
import { sendResponse } from '../../utils/response';

export const HealthCheck = async (req: Request, res: Response) => {
  try {
    return sendResponse(res, 200, 'Healthy');
  } catch (error) {

  }
};