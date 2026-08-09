import React from 'react'
import Deletenotes from './Deletenotes';
import Editnotes from './Editnotes';
const Notesitem = (props) => {
     const {note}=props;
  return (
    <>
<div className="  bg-gray-100 max-w-sm rounded overflow-hidden shadow-lg m-4 hover: translate-y-1 hover:scale-105 transition-transform duration-300 ease-in-out  dark:bg-gray-600 dark:text-white ">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{note.title}</div>
    <p className="text-gray-700 dark:text-white">{note.description}</p>
    <div className="flex justify-end gap-4 mt-4">
 <Editnotes note={note}/>

  <Deletenotes note={note}/>
</div>
 
  </div>
</div>
    </>
  
  )
}

export default Notesitem
