// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import NoteState from './context/notes/NotesState';
function App() {
  return (
  <>
  <NoteState>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>

  </Routes>
  </NoteState>

  </>
  );
}

export default App;
