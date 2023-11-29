import express from 'express';

import { getAllUsers, getMe, getUser } from '../Controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/me', getMe, getUser);
