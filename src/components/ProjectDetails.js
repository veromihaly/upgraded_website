import React from "react";

function ProjectDetails({ project, onBack }) {
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

      <p className="text-white text-lg">{project.detailedDescription}</p>

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
