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
  const [mode, setMode] = useState(false); // Whether dark mode is enabled or not
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
  <div className={mode ? "dark" : ""}>
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
  <Navbar mode={mode} setMode={setMode} />
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
 </div>
 </div>
</NoteState>
  </>
  );
}

export default App;
