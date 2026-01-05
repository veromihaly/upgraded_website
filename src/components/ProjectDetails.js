import React from "react";

function ProjectDetails({ project, onBack }) {
  const renderDescription = () => {
    switch (project.id) {
      case "3d-survival-game":
        return (
          <>
            <p className="mb-4">
              A 3D survival RPG game I developed for my thesis project. The game allows players to either follow the main story or explore an open world where they can gather resources,
              hunt animals, and survive.
            </p>

            <p className="mb-4">
              The project served as an opportunity to explore various aspects of Unity development, including <strong>script integration</strong>, <strong>animations</strong>, <strong>sound design</strong>, and <strong>scene management</strong>.
            </p>

            <p className="mb-8">
              <strong>Technologies used:</strong> Unity, C#, Blender, Photoshop, JSON
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">
              Challenges & Solutions
            </h3>

            <ul className="list-disc list-inside space-y-2">
              <li>Keeping AI, animations, and sound systems organized using Unity prefabs.</li>
              <li>Carefully selecting and testing assets from the Unity Store.</li>
              <li>Fine-tuning AI for realistic animal movement and behavior.</li>
              <li>Synchronizing sound effects with player and animal actions.</li>
              <li>Implementing item interaction and inventory systems.</li>
              <li>Creating a day–night cycle using Unity’s time and lighting systems.</li>
              <li>Building a JSON-based save/load system for persistent player progress.</li>
            </ul>
          </>
        );

      case "personal-website":
        return (
          <>
            <p className="mb-4">
              This is my personal portfolio website, designed and developed from scratch to showcase my projects, skills, and experience as a software developer.
            </p>

            <p className="mb-4">
              The website is built using <strong>React</strong> and <strong>Tailwind CSS</strong>, focusing on clean structure, responsive design, and performance.
            </p>

            <p>
              <strong>Technologies used:</strong> React, Tailwind CSS, GitHub Pages, Figma
            </p>
          </>
        );

      case "todo-app":
        return (
          <>
            <p className="mb-4">
              A task management web application built using <strong>ASP.NET Core MVC</strong>.
            </p>

            <p className="mb-4">
              It supports task creation, editing, completion tracking, and a persistent dark/light theme.
            </p>

            <p>
              <strong>Technologies used:</strong> ASP.NET Core MVC, C#, Entity Framework Core, SQL Server, Bootstrap
            </p>
          </>
        );

      default:
        return <p>No description available.</p>;
    }
  };

  return (
    <section>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-10">
        {/* Back button */}
        <button
          onClick={onBack}
          className="mb-6 text-primary font-semibold hover:underline"
        >
          ← Back to Projects
        </button>

        {/* Title */}
        <h2 className="text-4xl font-bold text-primary mb-6">
          {project.title}
        </h2>

        {/* Image */}
        <img
          src={project.image}
          alt={`${project.title} Preview`}
          className="w-full h-64 object-contain rounded-lg mb-8"
        />

        {/* Description */}
        <div className="text-gray-600 text-lg leading-relaxed space-y-4">
          {renderDescription()}
        </div>

        {/* GitHub link */}
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-accent text-primary font-semibold rounded-lg shadow hover:opacity-90 transition"
        >
          View on GitHub →
        </a>
      </div>
    </section>
  );
}

export default ProjectDetails;
