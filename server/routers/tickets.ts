import { Router } from 'express';
import * as eventsController from 'server/controllers/tickets';

const router = Router();

router.route('/').get(eventsController.getAllTickets);
router.route('/').post(eventsController.postTicket);
router.route('/:ticketId').get(eventsController.getTicketById);
router.route('/:ticketId').delete(eventsController.deleteTicketById);
router.route('/:ticketId').put(eventsController.putTicketById);

export default router;
