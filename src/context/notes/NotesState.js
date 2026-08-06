import React from "react";
import Notecontext from "./Notecontext";


const NoteState=(props)=>{
    const state={
        "name":"harrey",
        "class":"12"
    }
return (
    <Notecontext.Provider value={state}>
{props.children}
    </Notecontext.Provider>
)
}

export default NoteState;