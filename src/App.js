// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import NoteState from './context/notes/NotesState';
import Alert from './components/Alert';
import { useState ,useEffect} from 'react';
function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      message,
      type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
    useEffect(() => {
    showAlert("Welcome to iNotebook", "success");
  }, []);
 
  return (
  <>
<NoteState>
  <Navbar/>
  <div className="fixed top-16 left-0 right-0 z-50">
     <Alert
          message={alert?.message}
          type={alert?.type}
        />
  </div>
 
  
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>

  </Routes>
 
</NoteState>
  </>
  );
}

export default App;
