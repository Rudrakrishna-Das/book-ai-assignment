/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        heading: "#a5b4fc",
        back: "#6366f1",
      },
    },
  },
  plugins: [],
};
