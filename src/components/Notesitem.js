import React from 'react'

const Notesitem = (props) => {
     const {note}=props;
  return (
    <>
<div className="  bg-gray-100 max-w-sm rounded overflow-hidden shadow-lg m-4 hover: translate-y-1 hover:scale-105 transition-transform duration-300 ease-in-out ">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{note.title}</div>
    <p className="text-gray-700">{note.description}</p>
  </div>
</div>
    </>
  
  )
}

export default Notesitem
