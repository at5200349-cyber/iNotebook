import React from 'react'
import { useContext } from 'react'
import notecontext from '../context/notes/Notecontext'

const Deletenotes = (props) => {
    const {note}=props;
    const {deleteNote}=useContext(notecontext);
  return (
   <>
   <i className="fa-solid fa-trash text-red-500 cursor-pointer hover:text-red-700" title="Delete" onClick={() => deleteNote(note._id)}></i>
   </>
  )
}

export default Deletenotes
