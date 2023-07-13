/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        palette: {
          background: "#fefee8",
          button: "#85BDBF",
          box: "#5e5ff2",
          purple: "#5e5ff2",
          white: "#fefee8",
        },
      },
      backgroundImage: {
        "mesh-pattern": "url('https://i.ibb.co/F8LNQpL/Gradient.jpg')",
      },
    },
  },
  plugins: [],
};
