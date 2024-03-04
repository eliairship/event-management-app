import express from 'express';
import { authRouter, eventsRouter } from './routers';

const app = express();

app.use('/auth', authRouter);
app.use('/events', eventsRouter);
app.use('/tickets', eventsRouter);

export { app };
