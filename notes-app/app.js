const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body)
  }
})

//create a remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    notes.removeNote(argv.title)
  }
})

//create a list command
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler: function() {
    console.log('Listing out notes!')
  }
})


///create a read command
yargs.command({
  command: 'read',
  describe: "Read the note!",
  handler: function() {
    console.log("Reading the note!")
  }
})




yargs.parse()
