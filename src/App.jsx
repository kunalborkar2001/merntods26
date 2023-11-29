import { useState } from 'react'
import './App.css'
import AddToDo from './Components/AddToDo/AddToDo'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import HeroImage from './Components/HeroImage/HeroImage'

function App() {
  const [showTodoBox, setShowTodoBox] = useState(false);

  return (
    <>
      <div>
        <Navbar handleAddTodo={() => setShowTodoBox(!showTodoBox)} />
        <AddToDo todoBox={showTodoBox} handleAddTodo={() => setShowTodoBox(false)} />
        <HeroImage />
        <Hero />
      </div>
    </>
  );
}

export default App
