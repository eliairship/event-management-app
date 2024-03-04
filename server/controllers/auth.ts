import { Request, Response } from 'express';

export function postSignIn(req: Request, res: Response) {
  return res.json({ message: 'Sign In' }).status(200);
}
export function postSignUp(req: Request, res: Response) {
  return res.json({ message: 'Sign Up' }).status(200);
}
