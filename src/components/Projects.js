import React from "react";

function Projects({projects, onProjectClick}) {
    return (
        <section id="projects" className="p-6">
            <h2 className="text-2xl font-bold text-red-500">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => onProjectClick(project)}
                        className="relative cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
                    >
                        <div
                            className="w-full h-64 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-300"
                            style={{ backgroundImage: `url(${project.image})` }}
                        ></div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-white text-xl font-bold">{project.title}</h3>
                            <p className="text-white text-sm">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;