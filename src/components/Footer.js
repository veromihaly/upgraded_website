import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white p-4 text-center">
            <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;