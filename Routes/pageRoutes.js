import express from 'express';

import {
  getCreateNote,
  getHomepage,
  getMyNotesPage,
  viewNote,
} from '../Controllers/pagesController.js';

const router = express.Router();

router.get('/', getHomepage);
router.get('/login');
router.get('/signup');
router.get('/create-note', getCreateNote);
router.get('/my-notes', getMyNotesPage);
router.route('/note/:slug').get(viewNote);

export default router;
