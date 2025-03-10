import React from "react";
import logo from "../logo.png";

function Contact() {
    return (
        <section id="contact" className="p-6">
            <h2 className="text-2xl font-bold text-red-500">Contact</h2>
            <p className="text-white">Contact number: +36705961395 </p>
            <p className="text-white">Email: <a href="mailto:veromihaly18@gmail.com" target="_blank" className="text-red-500 hover:text-[#ff6347] hover:underline visited:text-[#d32f2f]">veromihaly18@gmail.com</a></p>
            <p className="text-white">LinkedIn: <a href="https://www.linkedin.com/in/mihály-verő-930054320" target="_blank"><img src={logo} alt="LinkedIn" width={30}/></a></p>
        </section>
    );
}

export default Contact;