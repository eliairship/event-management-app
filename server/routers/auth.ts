import { Router } from 'express';
import * as authController from 'server/controllers/auth';

const router = Router();

router.route('/signin').post(authController.postSignIn);
router.route('/signup').post(authController.postSignUp);

export default router;
