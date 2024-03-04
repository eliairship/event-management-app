import { Router } from 'express';
import * as ticketsController from '../controllers/tickets';


/**
 * @swagger
 * tags:
 *   name: Tickets
 */
const router = Router();

/**
 * @swagger
 * /tickets:
 *   get:
 *     summary: Get all tickets for the current user
 *     tags: [Tickets]
 *     responses:
 *       200:
 *         description: Returns a mysterious json message.
 */
router.route('/').get(ticketsController.getAllTickets);

/**
 * @swagger
 * /tickets:
 *   post:
 *     summary: Create a ticket
 *     tags: [Tickets]
 *     responses:
 *       200:
 *         description: Returns a mysterious json message.
 */
router.route('/').post(ticketsController.postTicket);

/**
 * @swagger
 * /tickets/{ticketId}:
 *   get:
 *     summary: Get a ticket by ID
 *     tags: [Tickets]
 *     parameters:
 *      - name: ticketId
 *        in: path
 *        type: integer
 *        description: The ID of the ticket.
 *     responses:
 *       200:
 *         description: Returns a mysterious json message.
 */
router.route('/:ticketId').get(ticketsController.getTicketById);

/**
 * @swagger
 * /tickets/{ticketId}:
 *   delete:
 *     summary: Delete a ticket by ID
 *     tags: [Tickets]
 *     parameters:
 *      - name: ticketId
 *        in: path
 *        type: integer
 *        description: The ID of the ticket.
 *     responses:
 *       200:
 *         description: Returns a mysterious json message.
 */
router.route('/:ticketId').delete(ticketsController.deleteTicketById);

/**
 * @swagger
 * /tickets/{ticketId}:
 *   put:
 *     summary: Update a ticket by ID
 *     tags: [Tickets]
 *     parameters:
 *      - name: ticketId
 *        in: path
 *        type: integer
 *        description: The ID of the ticket.
 *     responses:
 *       200:
 *         description: Returns a mysterious json message.
 */
router.route('/:ticketId').put(ticketsController.putTicketById);

export default router;
