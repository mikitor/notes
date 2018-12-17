const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  const notes = fetchNotes();
  const note = {
    title,
    body,
  };
  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  console.log('Listing notes');
};

const getNote = (title) => {
  console.log(`Getting note with title: ${title}`);
};

const removeNote = (title) => {
  console.log(`Remove note with title: ${title}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
};
