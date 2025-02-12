/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002B5B", // Navy Blue
        secondary: "#FF6F61", // Coral
        accent: "#F2F2F2", // Light Gray
        background: "#FAFAFA", // Off-White
        text: "#333333", // Dark Charcoal
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        bebasNeue: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
