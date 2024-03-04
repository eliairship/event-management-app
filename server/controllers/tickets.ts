import { Request, Response } from 'express';

export function getAllTickets(req: Request, res: Response) {
  return res.json({ message: 'All Tickets' }).status(200);
}

export function postTicket(req: Request, res: Response) {
  return res.json({ message: 'Create Ticket' }).status(200);
}

export function getTicketById(req: Request, res: Response) {
  return res
    .json({ message: 'Get Ticket By ID', params: req.params })
    .status(200);
}

export function deleteTicketById(req: Request, res: Response) {
  return res
    .json({ message: 'Delete Ticket By ID', params: req.params })
    .status(200);
}

export function putTicketById(req: Request, res: Response) {
  return res
    .json({ message: 'Put Event By ID', params: req.params })
    .status(200);
}
