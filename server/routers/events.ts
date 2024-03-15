import { Router } from 'express';
import * as eventsController from '../controllers/events';
import { validate } from '../utils/validation';
import { body } from 'express-validator';

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
 *         description: All events.
 */
router.route('/').get(eventsController.getAllEventsForUser);

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
 *         description: All tickets for an event.
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
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                required: true
 *                descriptions: The Event name
 *              date:
 *                type: string
 *                required: false
 *                descriptions: The Date of the Event.
 *              description:
 *                type: string
 *                required: false
 *                descriptions: The description of the Event.
 *              address:
 *                type: string
 *                required: false
 *                descriptions: The street address of the Event.
 *              city:
 *                type: string
 *                required: false
 *                descriptions: The city of the Event.
 *              state:
 *                type: string
 *                required: false
 *                descriptions: The U.S. state of where the event will take place.
 *              status:
 *                type: string
 *                required: false
 *                descriptions: The status of the event.
 *     responses:
 *       201:
 *         description: Returns the new event.
 */
router
  .route('/')
  .post(
    [
      body('name')
        .isString()
        .trim()
        .isLength({ min: 3 })
        .withMessage('The name of the event must have minimum length of 3'),
    ],
    validate,
    eventsController.postEvent
  );

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
 *         description: Returns an event with the requested ID.
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
 *       202:
 *         description: Successfully deleted the event.
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
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                required: true
 *                descriptions: The Event name
 *              date:
 *                type: string
 *                required: true
 *                descriptions: The Date of the Event.
 *              description:
 *                type: string
 *                required: true
 *                descriptions: The description of the Event.
 *              address:
 *                type: string
 *                required: true
 *                descriptions: The street address of the Event.
 *              city:
 *                type: string
 *                required: true
 *                descriptions: The city of the Event.
 *              state:
 *                type: string
 *                required: true
 *                descriptions: The U.S. state of where the event will take place.
 *              status:
 *                type: string
 *                required: true
 *                descriptions: The status of the event.
 *     responses:
 *       200:
 *         description: Returns the updated event.
 */
router
  .route('/:eventId')
  .put(
    [
      body('name')
        .isString()
        .trim()
        .isLength({ min: 3 })
        .withMessage('The name of the event must have minimum length of 3'),
      body('date').isISO8601().trim().withMessage('Please enter a valid date.'),
      body('description')
        .isString()
        .trim()
        .withMessage('Please enter a description'),
      body('address').isString().trim().withMessage('Please enter an address'),
      body('city').isString().trim().withMessage('Please enter a city'),
      body('state').isString().trim().withMessage('Please enter a state'),
      body('status').isString().trim().withMessage('Please enter a status'),
    ],
    validate,
    eventsController.putEventById
  );

export default router;
