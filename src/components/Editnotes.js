import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import notecontext from '../context/notes/Notecontext'

const Editnotes = (props) => {
    const {note}=props;
    const {editNote}=useContext(notecontext);
  return (
    <>
     <i className="fa-solid fa-pen-to-square text-blue-500 cursor-pointer hover:text-blue-700  dark:text-pink-500 " title="Edit"></i>
    </>
  )
}

export default Editnotes
