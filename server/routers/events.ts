import { Router } from 'express';
import * as eventsController from '../controllers/events';

const router = Router();

router.route('/').get(eventsController.getAllEvents);
router
  .route('/events/:eventId/ticket/:ticketId')
  .get(eventsController.getAllTicketsForEvent);
router.route('/').post(eventsController.postEvent);
router.route('/:eventId').get(eventsController.getEventById);
router.route('/:eventId').delete(eventsController.deleteEventById);
router.route('/:eventId').put(eventsController.putEventById);

export default router;
