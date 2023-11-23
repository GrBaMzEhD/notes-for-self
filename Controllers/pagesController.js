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
