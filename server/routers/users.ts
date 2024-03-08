import { Router } from 'express';
import * as usersController from '../controllers/users';
import { validate } from '../utils/validation';
import { body } from 'express-validator';

/**
 * @swagger
 * tags:
 *   name: Users
 */
const router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Returns all users.
 */
router.route('/').get(usersController.getAllUsers);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a user.
 *     tags: [Users]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              identifier:
 *                type: string
 *                required: true
 *                descriptions: The users email.
 *              name:
 *                type: string
 *                required: false
 *                descriptions: The users name.
 *              password:
 *                type: string
 *                required: true
 *                descriptions: The users password.
 *     responses:
 *       200:
 *         description: Returns the new user.
 */
router.route('/').post(
  [
    body('identifier')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('Please enter a valid identifier.'),
    body('name')
      .optional()
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('Please enter a valid identifier.'),
    body('password').trim().isString(),
    // .isStrongPassword({
    //   minLength: 8,
    //   minUppercase: 1,
    // }),
    // .withMessage('Password is required.'),
  ],
  validate,
  usersController.createUser
);

/**
 * @swagger
 * /users/{userId}:
 *   get:
 *     summary: Get a User by ID
 *     tags: [Users]
 *     parameters:
 *      - name: userId
 *        in: path
 *        type: integer
 *        description: The ID of the user.
 *     responses:
 *       200:
 *         description: Returns the requested user.
 */
router.route('/:userId').get(usersController.getUserById);

/**
 * @swagger
 * /users/{userId}:
 *   delete:
 *     summary: Delete a User by ID
 *     tags: [Users]
 *     parameters:
 *      - name: userId
 *        in: path
 *        type: integer
 *        description: The ID of the user.
 *     responses:
 *       202:
 *         description: Successfully deleted the user.
 */
router.route('/:userId').delete(usersController.deleteUser);

/**
 * @swagger
 * /users/{userId}:
 *   put:
 *     summary: Update a user.
 *     tags: [Users]
 *     parameters:
 *      - name: userId
 *        in: path
 *        type: integer
 *        description: The ID of the user.
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              identifier:
 *                type: string
 *                required: true
 *                descriptions: The users email.
 *              name:
 *                type: string
 *                required: false
 *                descriptions: The users name.
 *              password:
 *                type: string
 *                required: true
 *                descriptions: The users password.
 *     responses:
 *       200:
 *         description: Returns the new user.
 */
router.route('/:userId').put(
  [
    body('identifier')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('Please enter a valid identifier. Minimum length of 3.'),
    body('name')
      .optional()
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('Please enter a valid identifier.'),
    body('password')
      .trim()
      .isStrongPassword({
        minLength: 8,
        minUppercase: 1,
      })
      .withMessage('Password is required.'),
  ],
  validate,
  usersController.updateUser
);

export default router;
