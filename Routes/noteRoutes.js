import express from 'express';

import { createNewNote } from '../Controllers/notesController.js';

const router = express.Router();

router.route('/').post(createNewNote);

export default router;
