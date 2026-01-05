import React from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

function Projects({ projects, onProjectClick }) {
  return (
    <section id="projects">
        <AnimatedSection>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-10 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
                key={project.id}
                onClick={() => onProjectClick(project)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow group"
            >
              {/* Image */}
              <div
                className="h-56 bg-contain bg-center bg-no-repeat rounded-t-2xl transform group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 text-accent font-semibold">
                  View details →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
        </AnimatedSection>
    </section>
  );
}

export default Projects;
