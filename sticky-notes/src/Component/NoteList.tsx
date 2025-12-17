import type { Note } from '../types';

interface NoteListProps {
   notes: Note[]; 
   onDelete: (id: number) => void;
  }

export default function NoteList({notes,onDelete} : NoteListProps ) {
  return (
   <div>
    <h3>รายการโน๊ต {notes.length} ใบ</h3>
    {notes.length === 0 && <p>ไม่มีรายการโน้ต...</p>}
    {notes.map((note) => (
      <div key={note.id}> {note.text}
        <button onClick={() => onDelete(note.id)}>ลบ</button>
      </div>
    ))}
   </div>
  )
}