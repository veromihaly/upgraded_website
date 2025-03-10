import React from "react";

function About(){
    return(
        <section id="about" className="p-6">
            <h2 className="text-2xl font-bold text-red-500">About me</h2>
            <p className="text-white">
            I'm a student at the University of Debrecen, Faculty of Informatics. I've completed all my classes and only the final exam remains. With a passion for technology and problem-solving,
            I’ve worked hard to build a solid foundation in programming and software development. I hold certifications in Python (IT Specialist), HTML and CSS (IT Specialist) and
            Unity (Certified User: Programmer), and I have strong skills in C# and other programming languages. I thrive in both team settings and independent work, and I’m always eager to learn 
            and take on new challenges. While I’m still early in my professional journey, I’m confident that my dedication and quick learning ability will allow me to make an impact in the tech 
            industry. In my free time, I enjoy staying active, watching English-language films and series, and diving into video games. Feel free to explore my projects on my <a href="https://github.com/veromihaly" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-[#ff6347] hover:underline visited:text-[#d32f2f]">GitHub</a> to see more of what I’m working on!
            </p>
        </section>
    );
}

export default About;