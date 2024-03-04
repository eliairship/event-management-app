import express from 'express';
import cors from 'cors';
import { authRouter, eventsRouter, ticketsRouter } from './routers';
import { verifyToken } from './middleware/auth';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', authRouter);

app.use(verifyToken);
app.use('/events', eventsRouter);
app.use('/tickets', ticketsRouter);

export { app };
