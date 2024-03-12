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

const options: swaggerJsdoc.Options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Event Management API',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          in: 'header',
          name: 'Authorization',
          description: 'Bearer token to access api endpoints',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
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
app.use('/swagger.json', (req, res) =>
  res.json(openapiSpecification).status(200)
);

/**
 * Protected Routes
 */
app.use(verifyTokenMiddleware);
app.use('/users', usersRouter);
app.use('/events', eventsRouter);
app.use('/tickets', ticketsRouter);

export { app };
