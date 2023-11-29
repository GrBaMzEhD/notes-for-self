import Note from '../models/notesModel.js';

export const getHomepage = async (req, res, next) => {
  res.status(200).render('index'),
    {
      title: 'Notes',
    };
};

export const getCreateNote = async (req, res, next) => {
  res.status(200).render('new-note');
};

export const getMyNotesPage = async (req, res, next) => {
  const notes = await Note.find({});
  res.status(200).render('my-notes', { notes: notes }),
    {
      notes: notes,
    };
};

export const viewNote = async (req, res, next) => {
  const note = await Note.findOne({ slug: req.params.slug });
  res.status(200).render('view-note', { note: note }),
    {
      note: note,
    };
};

export const getSignupPage = async (req, res, next) => {
  res.status(200).render('signup');
};
