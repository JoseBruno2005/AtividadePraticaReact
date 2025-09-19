export default function NavBar() {
    return (
        <nav className="w-screen bg-[#00d8ff] text-white font-bold p-5 flex justify-between items-center">
            <div className="text-xl font-bold mr-200">
                Atividade React
            </div>

            <ul className="flex space-x-6 gap-x-10">
                <li>
                    <a href="https://www.linkedin.com/in/jose-bruno-bispo-parnaiba/" target="_blank" className="hover:bg-white/90 hover:text-gray-500 hover:scale-105 transforme-300 duration-200 cursor-pointer p-1 rounded-sm">
                        Meu Linkedin
                    </a>
                </li>
                <li>
                    <a href="https://github.com/JoseBruno2005" target="_blank" className="hover:bg-white/90 hover:text-gray-500 hover:scale-105 transforme-300 duration-200 cursor-pointer p-1 rounded-sm">
                        Meu Github
                    </a>
                </li>
            </ul>
        </nav>
    );
};