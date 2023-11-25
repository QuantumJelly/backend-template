import express from 'express';

const csrfProtection = null;

const csrfMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  // Validate CSRF token
  const csrfTokenFromForm = req.body._csrf;
  const csrfTokenFromHeader = req.headers['csrf-token'];

  if (csrfTokenFromForm !== csrfTokenFromHeader) {
    return res.status(403).json({ error: 'Invalid CSRF token' });
  }

  next();
};

export { csrfProtection, csrfMiddleware };