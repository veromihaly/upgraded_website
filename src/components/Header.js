import React from "react";

function Header({activeSection, onSectionClick}) {
    return (
        <header className="bg-[#1e1e1e] text-red-500 p-4 shadow-md opacity-85 rounded-2xl">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">Verő Mihály</h1>
                <nav className="space-x-6 text-lg">
                    <ul className="flex space-x-20 font-bold">
                        <li>
                            <button
                                onClick={() => onSectionClick('about')}
                                className={`px-10 py-3 rounded transition-colors ${
                                  activeSection === 'about'
                                    ? 'bg-[#a82b32] text-white'
                                    : 'hover:bg-[#a82b32] hover:text-white'
                                }`}
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => onSectionClick('projects')}
                                className={`px-10 py-3 rounded transition-colors ${
                                activeSection === 'projects'
                                    ? 'bg-[#a82b32] text-white'
                                    : 'hover:bg-[#a82b32] hover:text-white'
                                }`}
                            >
                                Projects
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => onSectionClick('contact')}
                                className={`px-10 py-3 rounded transition-colors ${
                                activeSection === 'contact'
                                    ? 'bg-[#a82b32] text-white'
                                    : 'hover:bg-[#a82b32] hover:text-white'
                                }`}
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;