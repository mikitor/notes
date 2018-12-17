const yargs = require('yargs');

const notes = require('./notes');

const { argv } = yargs;
const command = argv._[0];
console.log(`Command: ${command}`);
console.log('Yargs: ', argv);

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log(`Note successfully created! ${note.title}: ${note.body}`);
  } else {
    console.log('There is a note with that title!');
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove' && argv.title) {
  const removed = notes.removeNote(argv.title);
  if (removed) {
    console.log(`Note successfully removed! ${removed.title}: ${removed.body}`);
  } else {
    console.log('Note not found!');
  }
} else {
  console.log('Command not recognized');
}
