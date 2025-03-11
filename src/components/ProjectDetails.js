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

      <p className="text-white text-lg">{project.description}</p>

      {/* Optional: Add more details */}
      <a
        href="https://github.com/veromihaly"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-red-500 hover:text-orange-500 hover:underline font-bold"
      >
        View on GitHub →
      </a>
    </section>
  );
}

export default ProjectDetails;
