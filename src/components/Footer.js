import React from "react";

function Footer() {
    return (
        <footer className="bg-primary text-white shadow-md p-4 text-center opacity-85 rounded-2xl">
            <p>&copy; {new Date().getFullYear()} Verő Mihály. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;