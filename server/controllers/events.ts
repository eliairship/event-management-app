import { Request, Response } from 'express';

export function getAllEvents(req: Request, res: Response) {
  return res.json({ message: 'All Events' }).status(200);
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
