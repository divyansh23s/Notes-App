import { useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './App.css'
import { getNotes } from './utils/notesStorage'
function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  return (
    <>
      <Navbar />
      <Home notes={notes} />
    </>
  )
}

export default App
