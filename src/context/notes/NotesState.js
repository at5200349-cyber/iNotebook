import React from "react";
import Notecontext from "./Notecontext";
import { useState } from "react";


const NoteState=(props)=>{
    const initialnotes=[{
        
  "user": "6a75cfb1a6f8f7964013c862",
  "title": "Daily shedule",
  "description": "Please wakeup early",
  "tag": "personal",
  "_id": "6a75d0e9a6f8f7964013c863",
  "date": "2026-08-07T12:34:49.834Z",
  "__v": 0
},{
        
  "user": "6a75cfb1a6f8f7964013c862",
  "title": "Daily shedule",
  "description": "Please wakeup early",
  "tag": "personal",
  "_id": "6a75d0e9a6f8f7964013c863",
  "date": "2026-08-07T12:34:49.834Z",
  "__v": 0
},{
        
  "user": "6a75cfb1a6f8f7964013c862",
  "title": "Daily shedule",
  "description": "Please wakeup early",
  "tag": "personal",
  "_id": "6a75d0e9a6f8f7964013c863",
  "date": "2026-08-07T12:34:49.834Z",
  "__v": 0
},{
        
  "user": "6a75cfb1a6f8f7964013c862",
  "title": "Daily shedule",
  "description": "Please wakeup early",
  "tag": "personal",
  "_id": "6a75d0e9a6f8f7964013c863",
  "date": "2026-08-07T12:34:49.834Z",
  "__v": 0
},{
        
  "user": "6a75cfb1a6f8f7964013c862",
  "title": "Daily shedule",
  "description": "Please wakeup early",
  "tag": "personal",
  "_id": "6a75d0e9a6f8f7964013c863",
  "date": "2026-08-07T12:34:49.834Z",
  "__v": 0
},{
        
  "user": "6a75cfb1a6f8f7964013c862",
  "title": "Daily shedule",
  "description": "Please wakeup early",
  "tag": "personal",
  "_id": "6a75d0e9a6f8f7964013c863",
  "date": "2026-08-07T12:34:49.834Z",
  "__v": 0
},{
        
  "user": "6a75cfb1a6f8f7964013c862",
  "title": "Daily shedule",
  "description": "Please wakeup early",
  "tag": "personal",
  "_id": "6a75d0e9a6f8f7964013c863",
  "date": "2026-08-07T12:34:49.834Z",
  "__v": 0
},{
        
  "user": "6a75cfb1a6f8f7964013c862",
  "title": "Daily shedule",
  "description": "Please wakeup early",
  "tag": "personal",
  "_id": "6a75d0e9a6f8f7964013c863",
  "date": "2026-08-07T12:34:49.834Z",
  "__v": 0
},{
        
  "user": "6a75cfb1a6f8f7964013c862",
  "title": "Daily shedule",
  "description": "Please wakeup early",
  "tag": "personal",
  "_id": "6a75d0e9a6f8f7964013c863",
  "date": "2026-08-07T12:34:49.834Z",
  "__v": 0
},{
        
  "user": "6a75cfb1a6f8f7964013c862",
  "title": "Daily shedule",
  "description": "Please wakeup early",
  "tag": "personal",
  "_id": "6a75d0e9a6f8f7964013c863",
  "date": "2026-08-07T12:34:49.834Z",
  "__v": 0
},{
        
  "user": "6a75cfb1a6f8f7964013c862",
  "title": "Daily shedule",
  "description": "Please wakeup early",
  "tag": "personal",
  "_id": "6a75d0e9a6f8f7964013c863",
  "date": "2026-08-07T12:34:49.834Z",
  "__v": 0
},
];

const [notes,setNotes]=useState(initialnotes);;
 



    
  
return (
<>
   <Notecontext.Provider value={{notes,setNotes}}>
{props.children}
    </Notecontext.Provider>
</>

)
}

export default NoteState;