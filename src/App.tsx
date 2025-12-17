import React, { useState } from 'react';
import NoteForm from './Component/NoteForm';
import NoteList from './Component/NoteList';

function App() {
  const [notes, setNotes] = useState<{ id: number; text: string }[]>([]);

  const addNote = (text: string) => {
    const newNote = { id: Date.now(), text };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  
  return (
    <div className="App">
      <h1>Sticky Notes</h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} />
    </div>
  );
} 

export default App;