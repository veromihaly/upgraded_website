import React from "react";
import AnimatedSection from "./AnimatedSection";
import logo from "../images/logo.png";

function Contact() {
  return (
    <section id="contact">
        <AnimatedSection>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-10">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">
          Contact
        </h2>

        <div className="space-y-6 text-lg text-gray-600">
          <p>
            <span className="font-semibold text-primary">Phone:</span>{" "}
            <a
              href="tel:+36705961395"
              className="hover:underline"
            >
              +36 70 596 1395
            </a>
          </p>

          <p>
            <span className="font-semibold text-primary">Email:</span>{" "}
            <a
              href="mailto:veromihaly18@gmail.com"
              className="hover:underline"
            >
              veromihaly18@gmail.com
            </a>
          </p>

          <div className="flex items-center gap-4">
            <span className="font-semibold text-primary">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/mihály-verő-930054320"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <img src={logo} alt="LinkedIn" className="w-8 h-8" />
              <span className="text-primary font-semibold">
                View profile
              </span>
            </a>
          </div>
        </div>
      </div>
      </AnimatedSection>
    </section>
  );
}

export default Contact;
