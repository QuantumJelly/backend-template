import express from 'express';
import { createUser, getUser, updateUser, deleteUser } from '../controllers/userController';
import { HealthCheck } from '../controllers/health';

export const setupRoutes = (app: express.Application) => {
  // User routes
  app.post('/api/users', createUser);
  app.get('/api/users', getUser);
  app.put('/users/:id', updateUser);
  app.delete('/users/:id', deleteUser);

  app.get('/health', HealthCheck);

  // Add more routes as needed
};