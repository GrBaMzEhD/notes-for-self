import express from 'express';

import { getMe, getUser } from '../Controllers/userController.js';
import { signup, login } from '../Controllers/authController.js';

const router = express.Router();

// router.route('/').get(getAllUsers);
router.get('/me', getMe, getUser);
router.post('/signup', signup);
router.post('/login', login);

export default router;
