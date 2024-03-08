import { Router } from 'express';
import * as authController from '../controllers/auth';
import { body } from 'express-validator';
import { validate } from '../utils/validation';

/**
 * @swagger
 * definitions:
 *   Login:
 *     required:
 *       - email
 *       - password
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 *       path:
 *         type: string
 */

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User management and Auth
 */
const router = Router();

/**
 * @swagger
 * /auth/signin:
 *   post:
 *     summary: Sign in a user.
 *     tags: [Auth]
 *     parameters:
 *       - name: identifier
 *         description: User's email.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Returns an access token.
 */
router
  .route('/signin')
  .post(
    [
      body('identifier')
        .isString()
        .trim()
        .isLength({ min: 3 })
        .withMessage('Please enter a valid identifier.'),
      body('password').trim().isLength({ min: 8 }).isString(),
    ],
    validate,
    authController.postSignIn
  );

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     parameters:
 *       - name: identifier
 *         description: User's email.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Returns an access token.
 */
router
  .route('/signup')
  .post(
    [
      body('identifier')
        .isString()
        .trim()
        .isLength({ min: 3 })
        .withMessage('Please enter a valid identifier.'),
      body('password').trim().isLength({ min: 8 }).isString(),
    ],
    validate,
    authController.postSignUp
  );

export default router;
