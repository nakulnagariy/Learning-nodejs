const fs = require("fs");
const chalk = require("chalk");
const listNotes = () => {
  console.log(chalk.green.inverse("Your notes..."));
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.bold.green("New note added."));
  } else {
    console.log("Note title taken.");
  }
};

const removeNotes = (title) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => note.title !== title);
  if (updatedNotes.length !== notes.length) {
    saveNotes(updatedNotes);
    console.log(chalk.bold.green("Note removed successfully!."));
  } else {
    console.log(chalk.bold.white("No notes found with this title::", title));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("./notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("./notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    return console.log(chalk.green("Your Note is:: =>", note.body));
  } else {
    return console.log(chalk.red("No notes found with this title::=>", title));
  }
};

module.exports = { listNotes, addNotes, removeNotes, readNote };
