interface Note {
  id: number;
  text: string;
}

interface NoteListProps {
  notes: Note[];
}

function NoteList({ notes }: NoteListProps) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
            {note.text}
            </li>
      ))}
    </ul>
  );
}
export default NoteList;