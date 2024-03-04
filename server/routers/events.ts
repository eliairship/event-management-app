import { Router } from 'express';
import * as eventsController from '../controllers/events';

/**
 * @swagger
 * tags:
 *   name: Events
 */
const router = Router();

/**
 * @swagger
 * /events:
 *   get:
 *     summary: Get all events
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: Returns a mysterious json message.
 */
router.route('/').get(eventsController.getAllEvents);

/**
 * @swagger
 * /events/{eventId}/tickets:
 *   get:
 *     summary: Get all tickets for an event
 *     tags: [Events]
 *     parameters:
 *      - name: eventId
 *        in: path
 *        type: integer
 *        description: The ID of the event.
 *     responses:
 *       200:
 *         description: Returns a mysterious json message.
 */
router
  .route('/events/:eventId/tickets')
  .get(eventsController.getAllTicketsForEvent);

/**
 * @swagger
 * /events:
 *   post:
 *     summary: Create an event
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: Returns a mysterious json message.
 */
router.route('/').post(eventsController.postEvent);

/**
 * @swagger
 * /events/{eventId}:
 *   get:
 *     summary: Get an event by ID
 *     tags: [Events]
 *     parameters:
 *      - name: eventId
 *        in: path
 *        type: integer
 *        description: The ID of the event.
 *     responses:
 *       200:
 *         description: Returns a mysterious json message.
 */
router.route('/:eventId').get(eventsController.getEventById);

/**
 * @swagger
 * /events/{eventId}:
 *   delete:
 *     summary: Delete an event by ID
 *     tags: [Events]
 *     parameters:
 *      - name: eventId
 *        in: path
 *        type: integer
 *        description: The ID of the event.
 *     responses:
 *       200:
 *         description: Returns a mysterious json message.
 */
router.route('/:eventId').delete(eventsController.deleteEventById);

/**
 * @swagger
 * /events/{eventId}:
 *   put:
 *     summary: Update an event by ID
 *     tags: [Events]
 *     parameters:
 *      - name: eventId
 *        in: path
 *        type: integer
 *        description: The ID of the event.
 *     responses:
 *       200:
 *         description: Returns a mysterious json message.
 */
router.route('/:eventId').put(eventsController.putEventById);

export default router;
