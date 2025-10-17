import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from '../components/NavBar/NavBar';

export default function Home() {

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
            <div className='flex flex-row items-center justify-center  mt-30 gap-6'>
                <div className='font-semibold text-3xl flex flex-col items-center justify-center'>
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="w-24 h-24 transition duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
                    </a>
                    <h1>Vite</h1>
                </div>
                <div className='font-semibold text-3xl'>
                    <h1>+</h1>
                </div>
                <div className='font-semibold text-3xl flex flex-col items-center justify-center'>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="w-24 h-24 transition duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]" alt="React logo" />
                    </a>
                    <h1>React</h1>
                </div>
                <div className='font-semibold text-3xl'>
                    <h1>+</h1>
                </div>
                <div className='font-semibold text-3xl flex flex-col items-center justify-center' >
                    <a href="https://tailwindcss.com/docs/installation/using-vite"
                        target="_blank">
                        <img src={"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"} className="w-24 h-24 transition duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]" alt="Tailwind logo" />
                    </a>
                    <h1>TailWind</h1>
                </div>

            </div>
            <div className="flex flex-col items-center">
                <button className={theme === "Dark" ? (
                    'font-bold m-5 border-2 hover:bg-white/90 hover:text-gray-900 hover:scale-105 transforme-300 duration-200 cursor-pointer p-1 rounded-sm'
                ) : (
                    'font-bold m-5 border-2 hover:bg-black hover:text-white hover:scale-105 transforme-300 duration-200 cursor-pointer p-1 rounded-sm'
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