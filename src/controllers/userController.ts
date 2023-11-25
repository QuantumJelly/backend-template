import { Request, Response, NextFunction } from 'express';
import UserModel, { UserDocument } from '../models/user';
import { sendResponse } from '../utils/response';
import redisClient from '../database/redis';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new UserModel({ username, email, password });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
};

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const result = await redisClient.set('hello', 'world');

    // const data = await redisClient.get('hello');

    next(new Error('didi'));

    // return sendResponse(res, 200, 'test', data);
  } catch (error) {
    next(new Error('Error fetching user'));
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const { username, email, password } = req.body;
    const updatedUser = await UserModel.findByIdAndUpdate(userId, { username, email, password }, { new: true });
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating user');
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const deletedUser = await UserModel.findByIdAndDelete(userId);
    if (deletedUser) {
      res.json(deletedUser);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting user');
  }
};