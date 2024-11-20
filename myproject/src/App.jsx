import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import LandingPage from './component/LandingPage/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MealPlan from './component/MealPlan/MealPlan';
import ChatAI from './component/ChatAI/ChatAI';
import Reminder from './component/MealPlan/Reminder';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/mealplan' element={<MealPlan/>}/>
          <Route path='/chat' element={<ChatAI/>}/>
          <Route path='/mealplan/reminder' element={<Reminder/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
