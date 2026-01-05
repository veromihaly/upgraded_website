import React from "react";
import AnimatedSection from "./AnimatedSection";

function Experience() {
  return (
    <section id="experience" className="p-6">
      <AnimatedSection>
      <h2 className="text-4xl font-bold text-primary mb-6">
        Experience
      </h2>

      <div className="bg-[#0A1A2F] rounded-2xl p-6 shadow-lg border border-[#1f3b64]">
        <h3 className="text-2xl font-semibold text-white">
          Application Operator
        </h3>

        <p className="text-yellow-400 font-medium mb-2">
          Lufthansa Systems · Sept 16, 2025 – Present
        </p>

        <p className="text-gray-300 leading-relaxed mb-4">
          I work as an Application Operator at Lufthansa Systems, where I am responsible
          for monitoring, operating, and supporting enterprise-level applications
          in a production environment.
        </p>

        <p className="text-gray-300 leading-relaxed mb-4">
          My role includes incident handling, system monitoring, collaboration with
          development and infrastructure teams, and following ITIL-based operational
          processes to ensure high availability and reliability of mission-critical systems.
        </p>

        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Application monitoring and incident management</li>
          <li>Working with enterprise production systems</li>
          <li>Collaboration with international IT teams</li>
          <li>Operating under SLA and business-critical constraints</li>
        </ul>
      </div>
      </AnimatedSection>
    </section>
  );
}

export default Experience;
