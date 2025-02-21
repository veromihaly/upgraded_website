import React from "react";

function Header() {
    return (
        <header className="bg-gray-900 text-white p-4">
            <h1 className="text-3xl font-bold">Verő Mihály</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;