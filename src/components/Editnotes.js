import React from 'react'
// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import Editnoteswindow from './Editnoteswindow'

const Editnotes = (props) => {
    const {note}=props;
    const navigate = useNavigate();
    const handleEdit=()=>{
      navigate(`/editnote/${note._id}`, { state: { id: note._id ,title: note.title, description: note.description, tag: note.tag } });

    }
  return (
    <>
     <i className="fa-solid fa-pen-to-square text-blue-500 cursor-pointer hover:text-blue-700  dark:text-pink-500 " title="Edit"
     onClick={handleEdit}></i>

    </>
  )
}

export default Editnotes
