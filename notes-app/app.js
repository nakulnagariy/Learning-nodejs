const fs = require("fs");
const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const { listNotes, addNotes, removeNotes, readNote } = require("./notes");

// fs.writeFileSync(
//   "notes.txt",
//   "this is first text file created using nodejs second time."
// );

// fs.appendFileSync("notes.txt", "\nthis is appended text.");

// getNotes("your first notes");

// console.log(chalk.blue("Hello world!"));
// console.log(chalk.white(validator.isEmail("nakul@as.in")));

// const arg = process.argv[2];

// Customized yargs version
yargs.version("1.1.0");

// Create add commond
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    addNotes(argv.title, argv.body);
    // console.log("Title:", chalk.bold.white(argv.title));
    // console.log("Body:", chalk.bold.blue(argv.body));
  },
});

yargs.command({
  command: "remove",
  describe: "remove the note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log("removing the note..");
    removeNotes(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "list the note",
  handler: () => {
    console.log("listing your notes...");
    listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "read the note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log("Reading your note..");
    readNote(argv.title);
  },
});

// if we dont want to console yargs.argv, we can always parse it.

yargs.parse();
// console.log(yargs.argv);
