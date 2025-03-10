import React from "react";

function Footer() {
    return (
        <footer className="bg-[#1e1e1e] text-red-500 p-4 text-center opacity-85 rounded-2xl">
            <p>&copy; {new Date().getFullYear()} Verő Mihály. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;