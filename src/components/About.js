import React, { useContext } from 'react'
import notecontext from '../context/notes/Notecontext'

const About = () => {
  const a=useContext(notecontext);
  return (
    <div>
      This is about {a.name}
    </div>
  )
}

export default About
