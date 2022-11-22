/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}", "./public/index.html", './src/components/**/*.{js,jsx,ts,tsx}', './src/pages/**/*.{js,jsx,ts,tsx}',],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#faf7f4",
        "secondary": "#ffc800",
        "bdark": "#202124"
      }, 
      backgroundImage: theme => ({
        heroimage: "url('/src/images/hero.jpeg')",
        ourgoal: "url('/src/images/ourgoal.jpeg')",
        logo1: "url('/src/images/Penthouse1.png')",
        logo2: "url('/src/images/Penthouse2.png')",
      
      }),
      screens: {
        "mobile": "360px",
      }
    },
  },
  plugins: [],
}
