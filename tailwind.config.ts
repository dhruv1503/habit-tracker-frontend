// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // critical for working dark theme
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"), // for animations if you're using shadcn animations
  ],
};
