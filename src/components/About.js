import React from "react";

function About(){
    return(
        <section id="about" className="p-6">
            <h2 className="text-2xl font-bold text-red-500">About me</h2>
            <p className="text-white">
                I'm a recent graduate from the University of Debrecen, Faculty of Informatics. My final project was a 3D survival RPG game built in Unity, where I explored AI, animations, sound design, and more. 
                I hold certifications in Python (IT Specialist), HTML and CSS (IT Specialist), and Unity (Certified User: Programmer). I have strong skills in C#, Unity, and web technologies, and I love taking on challenges that stretch my problem-solving and creativity.
                I thrive in both team environments and independent projects, and I’m currently open to opportunities in software development, especially in game dev, frontend, or full-stack roles.
                In my free time, I enjoy gaming, drawing, and watching English-language series and films. 
            </p>
            <p className="text-white">
                Feel free to explore my projects on <a href="https://github.com/veromihaly" target="_blank" className="text-red-500 hover:text-[#ff6347] hover:underline visited:text-[#d32f2f]">GitHub</a> or download my resume right here:
            </p>
            <a href="CV.pdf" download="Mihaly_Vero_Resume.pdf" target="_blank" class="inline-block mt-4 px-6 py-3 bg-[#F03C46] text-white font-semibold rounded-lg shadow hover:bg-red-700 transition">
                Download My Resume
            </a>
        </section>
    );
}

export default About;