import React from "react";
import { motion } from "framer-motion";

function Header({ activeSection, onSectionClick }) {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap justify-between items-center px-6 py-4 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
          Verő Mihály
        </h1>

        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-6 font-semibold">
            {["about", "projects", "experience", "contact"].map((section) => (
              <li key={section}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onSectionClick(section)}
                  className={`px-5 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === section
                      ? "bg-accent text-primary"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
