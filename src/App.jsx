import { useState } from 'react'
import Navbar from "./components/Navbar"
import Landingpage from './components/Landingpage'
import Midpage from './components/Midpage'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' flex flex-col gap-10'>
      <Navbar/>
      <Landingpage/>
      <Midpage/>
      <Footer/>
      </div>
    </>
  )
}

export default App
