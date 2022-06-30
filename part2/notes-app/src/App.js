import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Note from "./components/Note";


const App = (props) => {
	const [notes, setNotes] = useState(props.notes);

	// controlled component
	const [newNote, setNewNote] = useState("a new note...");

	const [showAll, setShowAll] = useState(true);

	const addNote = (event) => {
		event.preventDefault();
		const noteObject = {
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() < 0.5,
			id: notes.length + 1,
		};
		setNotes(notes.concat(noteObject)); // stores to notes list by concating to list
		setNewNote(""); // reset the note input field
	};

	const handleNoteChange = (event) => {
		setNewNote(event.target.value);
	};

	const notesToShow = showAll
		? notes
		: notes.filter((note) => note.important === true);

	return (
		<div>
			<h1>Notes</h1>
			<div>
				<button onClick={() => setShowAll(!showAll)}>
					show {showAll ? "important" : "all"}
				</button>
			</div>
			<ul>
				{notesToShow.map((note) => (
					<Note key={note.id} note={note} />
				))}
			</ul>
			<form onSubmit={addNote}>
				<input value={newNote} onChange={handleNoteChange} />
				<button type="submit">save/submit</button>
			</form>
		</div>
	);
};

export default App;
