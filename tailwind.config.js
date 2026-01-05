/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#05164D",   
        accent: "#FFCC00",    
        surface: "#F5F7FA",   
        textDark: "#1F2937",
      },
    },
  },
  plugins: [],
};
