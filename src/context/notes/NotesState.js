import React from "react";
import Notecontext from "./Notecontext";
import { useState } from "react";

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);
  const fetchNotes = async () => {
  try{  const response = await fetch(
      "http://localhost:5000/api/notes/fetchallnotes",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      },
    );
    const json = await response.json();
    setNotes(json);}
    catch(err){
      console.error("Error fetching notes:", err);
      alert("An error occurred while fetching notes. Please try again.");
    }
  };




  //Add a note
  const addNote = async (title, description, tag) => {
   try{ const response = await fetch("http://localhost:5000/api/notes/addnote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    setNotes((prevNotes) => [...prevNotes, json]);
  }
  catch(err){
    console.error("Error adding note:", err);
    alert("An error occurred while adding the note. Please try again.");
  }
  };





  //Delete a note
  const deleteNote = async (id) => {
    try{const response = await fetch(`http://localhost:5000/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    if(json.success) {
      alert("Note deleted successfully");
    
    setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));}
    else {
      alert("Failed to delete note");
    }}
    catch(err){
      console.error("Error deleting note:", err);
      alert("An error occurred while deleting the note. Please try again.");
    }
  };






  //Edit a note
  const editNote = async (id, title, description, tag) => {
   try{ const response=await fetch(`http://localhost:5000/api/notes/updatenote/${id}`, {
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
        "auth-token":localStorage.getItem("token")},
        body:JSON.stringify({title,description,tag})  
    })
    const json=await response.json();
    
   if(json.success) { 
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note._id === id ? { ...note, title, description, tag } : note
      )
    );
    return true;
   }
   return false;
  }
  catch(err){
    console.error("Error editing note:", err);
    alert("An error occurred while editing the note. Please try again.");}
    return false;
  };

  return (
    <>
      <Notecontext.Provider
        value={{ notes, addNote, deleteNote, editNote, fetchNotes }}
      >
        {props.children}
      </Notecontext.Provider>
    </>
  );
};

export default NoteState;
