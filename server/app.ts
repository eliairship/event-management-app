import express from 'express';
import { authRouter, eventsRouter, ticketsRouter } from './routers';
import { verifyToken } from './middleware/auth';

const app = express();

app.use('/auth', authRouter);

app.use(verifyToken);
app.use('/events', eventsRouter);
app.use('/tickets', ticketsRouter);

export { app };
