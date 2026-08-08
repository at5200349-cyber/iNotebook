import React from "react";
import Notecontext from "./Notecontext";
import { useState } from "react";

const NoteState = (props) => {
  const initialnotes = [
    {
      user: "6a75cfb1a6f8f79640113c862",
      title: "Daily shedule",
      description: "Please wakeup early",
      tag: "personal",
      _id: "6a75d0e9a6f8f796401311c863",
      date: "2026-08-07T12:34:49.834Z",
      __v: 0,
    },
    {
      user: "6a75cfb1a6f8f79640132c862",
      title: "Daily shedule",
      description: "Please wakeup early",
      tag: "personal",
      _id: "6a75d0e9a6f8f17964013c863",
      date: "2026-08-07T12:34:49.834Z",
      __v: 0,
    },
    {
      user: "6a75cfb1a6f8f7964013c862",
      title: "Daily shedule",
      description: "Please wakeup early",
      tag: "personal",
      _id: "6a75d0e9a556f8f7964013c863",
      date: "2026-08-07T12:34:49.834Z",
      __v: 0,
    },
    {
      user: "6a75cfb1a6f8f7964013c862",
      title: "Daily shedule",
      description: "Please wakeup early",
      tag: "personal",
      _id: "6a75d0e9a6f8f796334013c863",
      date: "2026-08-07T12:34:49.834Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(initialnotes);

  //Add a note
  const addNote = (title, description, tag) => {
    const note = {
      user: "6a75cfb1a6f8f7964013c862",
      title: title,
      description: description,
      tag: tag,
      _id: "6a75d0e9a6f8f796334013c863",
      date: "2026-08-07T12:34:49.834Z",
      __v: 0,
    };
    setNotes((prevNotes) => [...prevNotes, note]);
  };
  //Delete a note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  //Edit a note
  const editNote = (id, title, description, tag) => {};

  return (
    <>
      <Notecontext.Provider value={{ notes, addNote, deleteNote, editNote }}>
        {props.children}
      </Notecontext.Provider>
    </>
  );
};

export default NoteState;
