import NoteForm from "./Component/NoteForm";
import NoteList from "./Component/NoteList";
import type { Note } from "./types";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const saved = localStorage.getItem('notes');
    if (saved) {
      return JSON.parse(saved) as Note[];
    }
    return [];
  });

  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now(),
      text: text
    };
    setNotes([...notes, newNote]);
  }

  const deleteNote =(id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  }

 /* useEffect(() => {
      const saved = localStorage.getItem('notes');
      if (saved) {
        setNotes(JSON.parse(saved) as Note[]);
      }
    }, []);
  */
   
  useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

  return (
     <div>
       <h1>sticky notes</h1>
        <NoteForm onAdd={addNote} />
        <NoteList notes={notes} onDelete={deleteNote}  />
     </div>
  );

}
export default App;