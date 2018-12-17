const yargs = require('yargs');

const notes = require('./notes');

const { argv } = yargs;
const command = argv._[0];
console.log(`Command: ${command}`);
console.log('Yargs: ', argv);

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note successfully created!');
    notes.logNote(note);
  } else {
    console.log('There is a note with that title!');
  }
} else if (command === 'list') {
  const noteList = notes.getAll();
  if (noteList) {
    console.log('Notes successfully read!');
    noteList.forEach((note) => {
      notes.logNote(note);
    });
  } else {
    console.log('Notes not found!');
  }
} else if (command === 'read') {
  const note = notes.getNote(argv.title);
  if (note) {
    console.log('Note successfully read!');
    notes.logNote(note);
  } else {
    console.log('Note not found!');
  }
} else if (command === 'remove' && argv.title) {
  const removed = notes.removeNote(argv.title);
  if (removed) {
    console.log('Note successfully removed!');
    notes.logNote(removed);
  } else {
    console.log('Note not found!');
  }
} else {
  console.log('Command not recognized');
}
