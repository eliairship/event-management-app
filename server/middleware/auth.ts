import { Request, Response, NextFunction } from 'express';

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  console.log('From Verify Token Middleware');
  res.locals.user_id = 1;
  return next();
}
