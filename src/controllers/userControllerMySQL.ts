import { Request, Response } from 'express';
import User from '../models/userMySQL';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await User.create({ username, email, password });
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching user');
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const { username, email, password } = req.body;
    const [rowsUpdated] = await User.update({ username, email, password }, { where: { id: userId } });
    if (rowsUpdated > 0) {
      const updatedUser = await User.findByPk(userId);
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
    const deletedUser = await User.destroy({ where: { id: userId } });
    if (deletedUser) {
      res.json({ success: true });
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting user');
  }
};