import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';
import bcrypt from 'bcryptjs';

export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await prisma.users.findMany({
      select: {
        identifier: true,
        name: true,
      },
      where: {
        deleted_at: null,
      },
    });
    if (users && users.length > 0) {
      return res.status(200).json(users);
    } else {
      return res.sendStatus(404);
    }
  } catch (err) {
    return res.sendStatus(404);
  }
}
export async function createUser(req: Request, res: Response) {
  const { name, identifier, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.users.create({
      select: {
        identifier: true,
        name: true,
      },
      data: {
        name,
        identifier,
        password: hashedPassword,
      },
    });
    if (user) {
      return res.status(201).json(user);
    } else {
      return res.sendStatus(400);
    }
  } catch (err) {
    return res.sendStatus(400);
  }
}

export async function getUserById(req: Request, res: Response) {
  try {
    const user = await prisma.users.findMany({
      select: {
        identifier: true,
        name: true,
      },
      where: {
        id: res.locals.user_id,
      },
    });
    if (user && user.length > 0) {
      return res.status(200).json(user);
    } else {
      return res.sendStatus(404);
    }
  } catch (err) {
    return res.sendStatus(404);
  }
}

export async function updateUser(req: Request, res: Response) {}
export async function deleteUser(req: Request, res: Response) {}
