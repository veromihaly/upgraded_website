import React from "react";
import AnimatedSection from "./AnimatedSection";


function About() {
  return (
    <section id="about">
        <AnimatedSection>  
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-10">
        <h2 className="text-4xl font-bold text-primary mb-6">
          About Me
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4">
          I am a graduate Computer Scientist and Application Operator at Lufthansa Systems with a strong interest in software development.  
I enjoy building modern web applications and continuously improving my technical skills through personal projects and real-world experience.

My main interests include React, .NET technologies, and clean, user-focused application design.

        </p>

        <p className="text-gray-600 leading-relaxed mb-8">
          In my free time, I enjoy gaming, reading, and watching English-language series and films.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="https://github.com/veromihaly"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Visit my GitHub
          </a>

          <a
            href="CV.pdf"
            download="Mihaly_Vero_Resume.pdf"
            className="inline-block px-6 py-3 bg-accent text-primary font-semibold rounded-lg shadow hover:opacity-90 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
      </AnimatedSection>  
    </section>
  );
}

export default About;
