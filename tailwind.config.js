/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Night: "#0b090a",
        "Eerie-black": "#141414",
        "Blood-red": "#660708",
        "Cornell-red": "#a4161a",
        "Cornell-red 2": "#ba181b",
        "Imperial red": "#e5383b",
        Silver: "#b1a7a6",
        Timberwolf: "#d3d3d3",
        "White-smoke": "#f5f3f4",
        White: "#ffffff",
      },
    },
  },
  plugins: [require("daisyui")],
};
