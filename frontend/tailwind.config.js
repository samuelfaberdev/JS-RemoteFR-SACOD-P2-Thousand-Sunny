/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#001011",
      green: "#4B5842",
      label: "#D9D9D9",
      head: "#EBEBD3",
      back: "#E3DBCC",
    },
    fontFamily: {
      amarante: ["Amarante", "serif"],
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
