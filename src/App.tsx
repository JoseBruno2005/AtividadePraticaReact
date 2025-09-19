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
        <a href="https://tailwindcss.com/docs/installation/using-vite"
          target="_blank">
          <img src={"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='font-semibold text-3xl'>
        Vite + React + TailWind
      </h1>
      <div className="flex flex-col items-center">
        <button className={theme === "Dark" ? (
          'font-bold m-5 border-2 hover:bg-white/90 hover:text-gray-900 hover:scale-105 transforme-300 duration-200 cursor-pointer p-1 rounded-sm'
        ) : (
          'font-bold m- 5border-2 hover:bg-black hover:text-white hover:scale-105 transforme-300 duration-200 cursor-pointer p-1 rounded-sm'
        )} onClick={handleThema}>
          {theme}
        </button>
      </div>
      <p className="read-the-docs">
        Clique nos logotipos para saber mais
      </p>
    </div>
  )
}

export default App
