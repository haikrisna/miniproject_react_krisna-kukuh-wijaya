import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './component/LandingPage/LandingPage'
import FooterComponent from './component/LandingPage/FooterComponent';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage/>
    </>
  )
}

export default App
