import Note from '../models/notesModel.js';

export const createNewNote = async (req, res) => {
  const doc = await Note.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
};
