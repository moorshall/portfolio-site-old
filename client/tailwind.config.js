/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            black: "#1E1E1E",
            gray: "#27272C",
            white: "#FFFFFF",
            green: "#13CE66",
            orange: "#F63F0A",
        },
        screens: {
            md: "800px",
        },
        extend: {
            screens: {
                resume: "1175px",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
