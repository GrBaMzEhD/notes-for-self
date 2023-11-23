import express from 'express';

import {
  getCreateNote,
  getHomepage,
  getMyNotesPage,
} from '../Controllers/pagesController.js';

const router = express.Router();

router.get('/', getHomepage);
router.get('/create-note', getCreateNote);
router.get('/my-notes', getMyNotesPage);
router.route('/note/:slug');

export default router;
