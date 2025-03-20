import React from "react";

function Header({ activeSection, onSectionClick }) {
  return (
    <header className="bg-[#1e1e1e] text-red-500 p-4 shadow-md opacity-85 rounded-2xl">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
        <h1 className="text-3xl font-bold">Verő Mihály</h1>

        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 font-bold">
            <li>
              <button
                onClick={() => onSectionClick("about")}
                className={`px-4 py-2 md:px-8 md:py-3 rounded transition-colors ${
                  activeSection === "about"
                    ? "bg-[#a82b32] text-white"
                    : "hover:bg-[#a82b32] hover:text-white"
                }`}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => onSectionClick("projects")}
                className={`px-4 py-2 md:px-8 md:py-3 rounded transition-colors ${
                  activeSection === "projects"
                    ? "bg-[#a82b32] text-white"
                    : "hover:bg-[#a82b32] hover:text-white"
                }`}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => onSectionClick("contact")}
                className={`px-4 py-2 md:px-8 md:py-3 rounded transition-colors ${
                  activeSection === "contact"
                    ? "bg-[#a82b32] text-white"
                    : "hover:bg-[#a82b32] hover:text-white"
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
