import React from 'react'
import Notes from './Notes'

const Home = () => {


  return (
    <>
    <div className=" min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-7xl bg-white shadow-lg p-6">
        <h2 className=" text-2xl font-bold mb-6 ">Add Note</h2>

        <form>
          <div className=" mb-4">
            <label className=" block mb-2 font-medium">Title</label>
            <input type="text" className=" w-full border rounded-md p-2 focus:outline-none  focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title"
              />
          </div>
               <div className="mb-4">
            <label className="block mb-2 font-medium">Description</label>
            <textarea
              rows="4"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter description"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
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

export default Home

