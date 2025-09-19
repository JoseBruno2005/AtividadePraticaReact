export default function NavBar() {
    return (
        <nav className="w-screen bg-[#00d8ff] text-white font-bold p-5 flex justify-between items-center">
            <div className="text-xl font-bold mr-200">
                Navbar
            </div>

            <ul className="flex space-x-6 gap-x-10">
                <li className="hover:bg-white/90 hover:text-gray-500 hover:scale-105 transforme-300 duration-200 cursor-pointer p-1 rounded-sm">
                    Home
                </li>
                <li className="hover:bg-white/90 hover:text-gray-500 hover:scale-105 transforme-300 duration-200 cursor-pointer p-1 rounded-sm">
                    Sobre
                </li>
                <li className="hover:bg-white/90 hover:text-gray-500 hover:scale-105 transforme-300 duration-200 cursor-pointer p-1 rounded-sm">
                    Contato
                </li>
            </ul>
        </nav>
    );
};