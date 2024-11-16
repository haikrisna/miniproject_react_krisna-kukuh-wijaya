import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './component/LandingPage/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MealPlan from './component/MealPlan/MealPlan';
import ChatAI from './component/ChatAI/ChatAI';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/mealplan' element={<MealPlan/>}/>
          <Route path='/chat' element={<ChatAI/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
