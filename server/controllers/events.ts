import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';

export async function getAllEvents(req: Request, res: Response) {
  const events = await prisma.events.findMany();
  return res.json(events).status(200);
}

export function getAllTicketsForEvent(req: Request, res: Response) {
  return res
    .json({ message: 'All Tickets For Event', params: req.params })
    .status(200);
}

export function postEvent(req: Request, res: Response) {
  return res.json({ message: 'Create Event' }).status(200);
}

export function getEventById(req: Request, res: Response) {
  return res
    .json({ message: 'Get Event By ID', params: req.params })
    .status(200);
}

export function deleteEventById(req: Request, res: Response) {
  return res
    .json({ message: 'Delete Event By ID', params: req.params })
    .status(200);
}

export function putEventById(req: Request, res: Response) {
  return res
    .json({ message: 'Put Event By ID', params: req.params })
    .status(200);
}
