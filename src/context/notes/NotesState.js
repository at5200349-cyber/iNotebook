import React from "react";
import Notecontext from "./Notecontext";
import { useState } from "react";

const NoteState = (props) => {


  const [notes, setNotes] = useState([]);
  const fetchNotes = async () => {
    const response = await fetch("http://localhost:5000/api/notes/fetchallnotes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      }
    });
    const json = await response.json();
    setNotes(json);
  };

  //Add a note
  const addNote = (title, description, tag) => {
    // const note = {
    //   user: "6a75cfb1a6f8f7964013c862",
    //   title: title,
    //   description: description,
    //   tag: tag,
    //   _id: "6a75d0e9a6f8f796334013c863",
    //   date: "2026-08-07T12:34:49.834Z",
    //   __v: 0,
    // };
    // setNotes((prevNotes) => [...prevNotes, note]);
  };
  //Delete a note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  //Edit a note
 const editNote = (id, title, description, tag) => {
    setNotes(
        notes.map((note) => {
            if (note._id === id) {
                return {
                    ...note,
                    title: title,
                    description: description,
                    tag: tag
                };
            }

            return note;
        })
    );
};

  return (
    <>
      <Notecontext.Provider value={{ notes, addNote, deleteNote, editNote ,fetchNotes}}>
        {props.children}
      </Notecontext.Provider>
    </>
  );
};

export default NoteState;
