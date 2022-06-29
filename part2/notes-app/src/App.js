import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
	const [notes, setNotes] = useState(props.notes);

  // controlled component


	const addNote = (event) => {
		event.preventDefault();
		console.log("button clicked", event.target);
	};

	return (
		<div>
			<h1>Notes</h1>
			<ul>
				{notes.map((note) => (
					<Note key={note.id} note={note} />
				))}
			</ul>
			<form onSubmit={addNote}>
				<input />
				<button type="submit">save/submit</button>
			</form>
		</div>
	);
};

export default App;
