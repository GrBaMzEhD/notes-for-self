/* eslint-disable */
import { newNote } from './axiosMethods.js';

const submitNewNote = document.getElementById('submitNewNote');

if (submitNewNote) {
  submitNewNote.addEventListener('click', () => {
    const newNoteTitle = document.getElementById('inputTitle').value;
    const newNoteContent = document.getElementById('inputContent').value;
    if (newNoteTitle && newNoteContent) {
      newNote(newNoteTitle, newNoteContent);
    }
  });
}
