import { Router } from 'express';
import * as authController from '../controllers/auth';

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
 *       - name: email
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
 *         description: Returns a mysterious json message.
 */
router.route('/signin').post(authController.postSignIn);

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Register a new user 
 *     tags: [Auth]
 *     parameters:
 *       - name: email
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
 *         description: Returns a mysterious json message.
 */
router.route('/signup').post(authController.postSignUp);

export default router;
