import { Router } from 'express';
import * as ticketsController from '../controllers/tickets';

const router = Router();

router.route('/').get(ticketsController.getAllTickets);
router.route('/').post(ticketsController.postTicket);
router.route('/:ticketId').get(ticketsController.getTicketById);
router.route('/:ticketId').delete(ticketsController.deleteTicketById);
router.route('/:ticketId').put(ticketsController.putTicketById);

export default router;
