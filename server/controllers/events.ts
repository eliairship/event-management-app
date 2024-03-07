import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';
import { event_status } from '@prisma/client';

export async function getAllEvents(req: Request, res: Response) {
  const events = await prisma.events.findMany();
  return res.json(events).status(200);
}

export async function getAllTicketsForEvent(req: Request, res: Response) {
  const tickets = await prisma.tickets.findMany({
    where: {
      event_id: parseInt(req.params.eventId),
    },
  });

  if (tickets && tickets.length > 0) {
    return res.status(200).json(tickets);
  } else {
    return res.sendStatus(404);
  }
}

export async function postEvent(req: Request, res: Response) {
  const { name } = req.body;
  const event = await prisma.events.create({
    data: {
      name,
      user_id: res.locals.user_id,
      status: event_status.INACTIVE,
      created_at: new Date(),
    },
  });

  if (event) {
    return res.status(201).json(event);
  } else {
    return res.sendStatus(400);
  }
}

export async function getEventById(req: Request, res: Response) {
  const event = await prisma.events.findUnique({
    where: {
      id: parseInt(req.params.eventId),
    },
  });

  if (event) {
    return res.status(200).json(event);
  } else {
    return res.sendStatus(404);
  }
}

export async function deleteEventById(req: Request, res: Response) {
  const deletedEvent = await prisma.events.delete({
    where: {
      id: parseInt(req.params.eventId),
    },
  });

  if (deletedEvent) {
    return res.status(202);
  }

  return res.sendStatus(400);
}

export async function putEventById(req: Request, res: Response) {
  try {
    const updatedEvent = await prisma.events.update({
      where: {
        id: parseInt(req.params.eventId),
      },
      data: req.body,
    });
    return res.status(200).json(updatedEvent);
  } catch (error) {
    return res.sendStatus(400);
  }
}
