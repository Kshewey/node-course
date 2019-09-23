const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

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
    console.log("title: " + argv.title)
    console.log("body " + argv.body)
  }
})

//create a remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function() {
    console.log('Removing the note!')
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
