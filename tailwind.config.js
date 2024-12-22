/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#FF5200",
          sub: "#EB1700",
          defautl: "#FEF1EE",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
