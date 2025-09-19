import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [theme, setThema] = useState("Dark");

  const handleThema = () => {
    if (theme === "Dark") {
      setThema("light");
    } else {
      setThema("Dark")
    }
  }

  return (
    <div className={`h-screen flex flex-col items-center ${theme === "Dark" ? (
      "bg-[#242424]"
    ) : (
      "bg-white text-black"
    )}`}>
      <NavBar></NavBar>
      <div className='flex flex-row mt-30'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href=""
          target="_blank">
          <img src={"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='font-semibold text-3xl'>
        Vite + React + TailWind
      </h1>
      <div className="flex flex-col items-center">
        <button className={theme === "Dark" ? (
          'font-bold hover:bg-white/90 hover:text-gray-900 hover:scale-105 transforme-300 duration-200 cursor-pointer p-1 rounded-sm'
        ) : (
          'font-bold hover:bg-black hover:text-white hover:scale-105 transforme-300 duration-200 cursor-pointer p-1 rounded-sm'
        )} onClick={handleThema}>
          {theme}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
