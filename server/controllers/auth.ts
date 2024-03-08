import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { prisma } from '../utils/prisma';
import { generateAccessToken } from '../utils/auth';

export async function postSignIn(req: Request, res: Response) {
  const { identifier, password } = req.body;

  const users = await prisma.users.findMany({
    where: {
      identifier,
    },
  });

  const user = users && users.length > 0 && users[0];

  if (user) {
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const accessToken = await generateAccessToken(user.id);
      return res.status(200).json({ accessToken });
    }
  }

  return res.status(401).send('Invalid identifier or password.');
}
export async function postSignUp(req: Request, res: Response) {
  const { identifier, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.users.create({
      select: {
        id: true,
        identifier: true,
        name: true,
      },
      data: {
        identifier,
        password: hashedPassword,
      },
    });
    if (!user) {
      return res.sendStatus(400);
    } else {
      const accessToken = await generateAccessToken(user.id);
      return res.status(200).json({ accessToken });
    }
  } catch (error) {
    return res.status(400).send('Email already used.');
  }
}
