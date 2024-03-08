import express from 'express';
import cors from 'cors';
import {
  authRouter,
  eventsRouter,
  ticketsRouter,
  usersRouter,
} from './routers';
import { verifyTokenMiddleware } from './middleware/auth';
import swaggerJsdoc from 'swagger-jsdoc';
const swaggerUI = require('swagger-ui-express');

const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Event Management API',
      version: '1.0.0',
    },
  },
  apis: ['./routers/**.ts', `${__dirname}/routers/*.ts`],
};

const openapiSpecification = swaggerJsdoc(options);

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);

/**
 * Public Routes
 */
app.use('/auth', authRouter);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(openapiSpecification));

/**
 * Protected Routes
 */
app.use(verifyToken);
app.use('/users', usersRouter);
app.use('/events', eventsRouter);
app.use('/tickets', ticketsRouter);

export { app };
