import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import "./styles.css";
import gamePreview from './images/3d-game-preview.png';
import websitePreview from './images/website-preview.png';
import todoAppPreview from './images/todoAppPreview.png';

const projectList = [
  {
    id: "3d-survival-game",
    title: "3D Survival Game",
    description:
    "A Unity survival game featuring crafting, exploration, and a dynamic day-night cycle.",
    image: gamePreview, 
    githubLink:"https://github.com/veromihaly/Wilderness_Odyssey"
  },
  {
    id: "personal-website",
    title: "Personal Website",
    description:
    "My React-based portfolio showcasing my projects and skills.",
    image: websitePreview,
    githubLink:"https://github.com/veromihaly/upgraded_website"
  },
  {
    id: "todo-app",
    title: "Task Manager Web App",
    description:
    "A full-featured ToDo list app developed using ASP.NET Core MVC and Entity Framework, featuring Bootstrap-based UI, dark mode, and animations.",
    image: todoAppPreview,
    githubLink:"https://github.com/veromihaly/ToDoApp"
  },
];

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [activeProject, setActiveProject] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setActiveProject(null);
  };

  const handleProjectClick = (project) => {
    setActiveProject(project);
    setActiveSection("projectDetails");
  };

  const handleBackToProjects = () => {
    setActiveProject(null);
    setActiveSection("projects");
  };

  return (
    <div className="section">
      <ParticlesBackground />
      <Header activeSection={activeSection} onSectionClick={handleSectionClick} />
      <main>
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && (
          <Projects
            projects={projectList}
            onProjectClick={handleProjectClick}
          />
        )}
        {activeSection === "projectDetails" && activeProject && (
          <ProjectDetails
            project={activeProject}
            onBack={handleBackToProjects}
          />
        )}
        {activeSection === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
