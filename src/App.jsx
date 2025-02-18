import { useState } from 'react'
import './App.css'
import KashirinLogo from '/Kashirin Logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/Kiroharth" target="_blank">
          <img src={KashirinLogo} className="logo" alt="Kashirin Logo" />
        </a>
      </div>
      <h1>KASHIRIN KITO</h1>
      <div className="card">
        <button class="explore-button">EXPLORE</button>
      </div>
    </>
  )
}

export default App
