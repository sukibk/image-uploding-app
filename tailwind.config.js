/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", //for "npm create react app only us this line"
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/src/assets/main-background.webp')",
      },
      screens: {
        ls: { raw: "(min-height: 900px)" },
      },
    },
  },
  plugins: [],
};
