import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import "./styles.css";

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="section">
      <ParticlesBackground />
      <Header activeSection={activeSection} onSectionClick={handleSectionClick} />
      <main>
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
