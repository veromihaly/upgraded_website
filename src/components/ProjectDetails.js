import React from "react";

function ProjectDetails({ project, onBack }) {
  const renderDescription = () => {
    switch (project.id) {
      case "3d-survival-game":
        return (
          <>
            <p className="mb-4">
            A 3D survival RPG game I developed for my thesis project. The game allows players to either follow the main story or explore an open world where they can gather resources,
            hunt animals, and survive. The project served as an opportunity to explore various aspects of Unity development, including script integration, animations, sound design, and scene management.
            </p>
            <p className="mb-4">
              The project served as an opportunity to explore various aspects of Unity development, including <strong>script integration</strong>, <strong>animations</strong>, <strong>sound design</strong>, and <strong>scene management</strong>.
            </p>
            <p>
              <strong>Technologies used:</strong> Unity, C#, Blender (for models), Photoshop (for textures), and JSON (for save/load systems).
            </p>
            <br></br>
            <p className="text-2xl font-bold text-red-500 mb-4">
            Challenges&Solutions:
            </p>
            <p>
            -Integrating all of the game's elements, such as AI, animations, and sounds, while keeping the code organized. I leveraged Unity's prefab system to streamline the process.
            </p>
            <p>
            -Sourcing the right prefabs and models from the Unity Store was a challenge. I spent time experimenting with different assets to find ones that best fit the game's style and mechanics.
            </p>
            <p>
            -Implementing realistic animal movement required fine-tuning the AI. I used AI techniques to ensure smooth movement for animals in the environment.
            -I had to sync sounds with animal and player movements. I created sound triggers in the game that would play specific sounds when the player or animals performed certain actions.
            </p>
            <p>
            -Designing a system to allow the player to pick up items from the environment involved writing scripts to detect interactions and manage the inventory.
            -Time Simulation: I implemented a day-night cycle by using Unity's time system to change the skybox and lighting, simulating the passing of days.
            </p>
            <p>
            -A key feature was making the player character's movement feel responsive, which involved working on character control scripts and implementing jumping mechanics.
            -Implementing a save system for player progress was challenging. To allow players to save and load their progress, I used JSON files to serialize and deserialize data. This method let me store information such as inventory items, player stats, and game progress, ensuring that players could resume from where they left off.
            </p>
          </>
        );
      case "personal-website":
        return (
          <>
          <p className="mb-4">
            This is my personal portfolio website, designed and developed from scratch to showcase my projects, skills, and experience as a software developer.
          </p>
          <p className="mb-4">
            The website is built using <strong>React</strong> for dynamic component rendering and <strong>Tailwind CSS</strong> for fast, responsive, and modern styling. It features a clean dark-themed design with smooth animations, intuitive navigation, and a focus on accessibility and performance.
          </p>
          <p>
            <strong>Technologies used:</strong> React, Tailwind CSS, GitHub Pages (for hosting), and Figma (for UI/UX planning).
          </p>
          </>
        );
      default:
        return <p className="text-white">No description available.</p>;
    }
  };

  return (
    <section className="p-6">
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 rounded bg-red-500 text-white hover:bg-red-700"
      >
        ← Back to Projects
      </button>

      <h2 className="text-3xl font-bold text-red-500 mb-4">{project.title}</h2>

      <img
        src={project.image}
        alt={`${project.title} Preview`}
        className="h-48 object-cover rounded-lg mb-6"
      />

      <div className="text-white text-lg leading-relaxed">
        {renderDescription()}
      </div>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 mt-4 px-4 py-2 bg-[#a82b32] text-white rounded hover:bg-[#c0392b] transition-colors"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.28 3.438 9.75 8.207 11.325.6.111.793-.261.793-.579 0-.285-.011-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.238 1.839 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.774.418-1.305.76-1.605-2.665-.303-5.467-1.334-5.467-5.932 0-1.31.469-2.382 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.874.12 3.176.77.839 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921.43.372.814 1.102.814 2.222 0 1.604-.015 2.896-.015 3.289 0 .32.19.694.801.576C20.565 22.04 24 17.575 24 12.297 24 5.67 18.627.297 12 .297z"
          />
        </svg>
        View on GitHub →
      </a>
    </section>
  );
}

export default ProjectDetails;
