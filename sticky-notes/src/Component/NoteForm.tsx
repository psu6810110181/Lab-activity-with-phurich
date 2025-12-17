import React, { useState } from 'react';

interface NoteFormProps {
  onAdd: (text: string) => void;
}

export default function NoteForm({ onAdd }: NoteFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}>
        <input value={text} 
        onChange={handleChange} />
    </form>
  );
}


