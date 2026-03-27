const notes = [];
let currentNote = null;

const newNoteButton = document.querySelector(".newNote");
const noteButtonList = document.querySelector(".noteButtonList");
const noteTitleField = document.querySelector(".title");
const notesField = document.querySelector(".notes");

const addNote = function () {
  const newNote = { title: "New Note", content: "" };
  notes.push(newNote);

  const noteButton = document.createElement("button");
  noteButton.textContent = newNote.title;
  noteButtonList.appendChild(noteButton);

  noteButton.addEventListener("click", () => editNote(newNote, noteButton));
};

const editNote = function (note, noteButton) {
  currentNote = note;
  noteTitleField.value = note.title;
  notesField.value = note.content;

  noteTitleField.oninput = () => {
    currentNote.title = noteTitleField.value;
    noteButton.textContent = currentNote.title;
  };

  notesField.oninput = () => {
    currentNote.content = notesField.value;
  };
};

newNoteButton.addEventListener("click", addNote);