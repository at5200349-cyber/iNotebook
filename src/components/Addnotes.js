import React from 'react'
import Notes from './Notes'
import { useContext ,useState} from 'react'
import notecontext from '../context/notes/Notecontext'

const Addnotes = () => {
    const {addNote}=useContext(notecontext);
    const [note,setNote]=useState({title:"",description:"",tag:"default"});
    


    const handleAddNote = (e) => {
        e.preventDefault();
        if(note.title.trim() === "" || note.description.trim() === "") {
            // i ADD ALERT HERE
            return;
        }

        addNote(note.title, note.description, note.tag);
        setNote({title:"",description:"",tag:"default"});


    };




    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }



  return (
    <>
     <div className=" min-h-screen flex justify-center items-center bg-gray-100  dark:bg-gray-800 dark:text-white">
      <div className="w-full max-w-7xl bg-white shadow-lg p-6  dark:bg-gray-900 dark:text-white">
        <h2 className=" text-2xl font-bold mb-6 ">Add Note</h2>

        <form onSubmit={handleAddNote} className="mb-6">
          <div className=" mb-4 ">
            <label className=" block mb-2 font-medium">Title</label>
            <input type="text" name="title" value={note.title} onChange={handleChange} className=" w-full border rounded-md p-2 focus:outline-none  focus:ring-2 focus:ring-blue-500  dark:bg-gray-600 dark:text-white"
              placeholder="Enter title"
              />
          </div>
               <div className="mb-4">
            <label className="block mb-2 font-medium ">Description</label>
            <textarea
              name="description"
              value={note.description}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500  dark:bg-gray-600 dark:text-white"
              placeholder="Enter description"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 dark:bg-pink-500 dark:hover:bg-pink-600 transition"
          >
            Add Note
          </button>
        </form>
          
        <Notes/>
        
      </div>
    </div>
    </>
  )
}

export default Addnotes
