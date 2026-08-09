import React from "react";
import { useContext } from 'react'
import notecontext from '../context/notes/Notecontext'
import Notesitem from "./Notesitem";



const Notes = () => {
      const {notes, fetchNotes}=useContext(notecontext);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note) => {
          return <Notesitem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
